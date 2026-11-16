
Add-Type -AssemblyName System.Drawing

$srcPath = "c:\Users\Saksham\Downloads\SAADGI_OFFICIAL_STORE\saadgi-store\src\assets\s-monogram.png"
$img = [System.Drawing.Bitmap]::FromFile($srcPath)

$w = $img.Width
$h = $img.Height
Write-Host "Source image: $w x $h"

# Create a clean 32bpp ARGB bitmap
$out = New-Object System.Drawing.Bitmap($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

# Background color in the uploaded image is beige/off-white ~ (R:254, G:245, B:236)
# Any pixel that is bright/cream/beige background should become transparent.
# The gold leaves, black 'S' letter, and gold hoop should be preserved crisply.

for ($x = 0; $x -lt $w; $x++) {
    for ($y = 0; $y -lt $h; $y++) {
        $p = $img.GetPixel($x, $y)
        
        # Calculate luminance / brightness and closeness to cream background
        # Background is high brightness and low saturation warm cream:
        # R around 250-255, G around 240-250, B around 230-245
        
        # The S letter is dark brown/black (R < 100, G < 100, B < 100)
        # The leaves and ring are golden bronze (R > B + 15, distinct color or lower brightness than 240)
        
        $isBg = ($p.R -ge 238 -and $p.G -ge 228 -and $p.B -ge 218 -and [Math]::Abs($p.R - $p.G) -le 16 -and [Math]::Abs($p.G - $p.B) -le 18)
        
        if ($isBg) {
            # Fully transparent
            $out.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        } else {
            # Check edge antialiasing against cream background
            # If it is slightly darker than pure background, calculate proportional alpha
            $brightness = ($p.R + $p.G + $p.B) / 3.0
            if ($brightness -gt 225) {
                # Edge pixel transition
                $alphaFactor = (245 - $brightness) / 20.0
                if ($alphaFactor -lt 0) { $alphaFactor = 0 }
                if ($alphaFactor -gt 1) { $alphaFactor = 1 }
                $a = [int]($alphaFactor * 255)
                # Recover true foreground color without cream washing
                $out.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($a, $p.R, $p.G, $p.B))
            } else {
                # Solid emblem pixel
                $out.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(255, $p.R, $p.G, $p.B))
            }
        }
    }
}

$img.Dispose()

$dest = "c:\Users\Saksham\Downloads\SAADGI_OFFICIAL_STORE\saadgi-store\src\assets\s-monogram-transparent.png"
$out.Save($dest, [System.Drawing.Imaging.ImageFormat]::Png)

$fav1 = "c:\Users\Saksham\Downloads\SAADGI_OFFICIAL_STORE\saadgi-store\public\saadgi-favicon.png"
$out.Save($fav1, [System.Drawing.Imaging.ImageFormat]::Png)

$fav2 = "c:\Users\Saksham\Downloads\SAADGI_OFFICIAL_STORE\saadgi-store\public\favicon.png"
$out.Save($fav2, [System.Drawing.Imaging.ImageFormat]::Png)

$out.Dispose()
Write-Host "Done generating perfect transparent S logo!"
