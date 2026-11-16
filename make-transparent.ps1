
Add-Type -AssemblyName System.Drawing
$filePath = "c:\Users\Saksham\Downloads\SAADGI_OFFICIAL_STORE\saadgi-store\src\assets\s-monogram.png"
$bmp = [System.Drawing.Bitmap]::FromFile($filePath)
Write-Host "Width: $($bmp.Width) Height: $($bmp.Height)"
$bg = $bmp.GetPixel(0, 0)
Write-Host "Corner color: R=$($bg.R), G=$($bg.G), B=$($bg.B), A=$($bg.A)"

# Create a transparent version
$outBmp = New-Object System.Drawing.Bitmap($bmp.Width, $bmp.Height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$bgR = [double]$bg.R
$bgG = [double]$bg.G
$bgB = [double]$bg.B

for ($x = 0; $x -lt $bmp.Width; $x++) {
    for ($y = 0; $y -lt $bmp.Height; $y++) {
        $c = $bmp.GetPixel($x, $y)
        # Distance from background color
        $dist = [Math]::Sqrt([Math]::Pow($c.R - $bgR, 2) + [Math]::Pow($c.G - $bgG, 2) + [Math]::Pow($c.B - $bgB, 2))
        
        if ($dist -lt 15) {
            # Fully transparent
            $outBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        } elseif ($dist -lt 40) {
            # Smooth feathered edge
            $alpha = [int]((($dist - 15) / 25) * 255)
            $outBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($alpha, $c.R, $c.G, $c.B))
        } else {
            $outBmp.SetPixel($x, $y, $c)
        }
    }
}

$bmp.Dispose()
$outPath = "c:\Users\Saksham\Downloads\SAADGI_OFFICIAL_STORE\saadgi-store\src\assets\s-monogram-transparent.png"
$outBmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)

$favPath = "c:\Users\Saksham\Downloads\SAADGI_OFFICIAL_STORE\saadgi-store\public\saadgi-favicon.png"
$outBmp.Save($favPath, [System.Drawing.Imaging.ImageFormat]::Png)

$favSvgPath = "c:\Users\Saksham\Downloads\SAADGI_OFFICIAL_STORE\saadgi-store\public\favicon.png"
$outBmp.Save($favSvgPath, [System.Drawing.Imaging.ImageFormat]::Png)

$outBmp.Dispose()
Write-Host "Saved transparent s-monogram successfully!"
