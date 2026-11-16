
Add-Type -AssemblyName System.Drawing

$srcPath = "c:\Users\Saksham\Downloads\SAADGI_OFFICIAL_STORE\saadgi-store\src\assets\s-monogram.png"
$img = [System.Drawing.Bitmap]::FromFile($srcPath)

$w = $img.Width
$h = $img.Height
Write-Host "Uploaded PNG Dimensions: $w x $h"

# Sample corner pixels to see transparency and background
$c0 = $img.GetPixel(0, 0)
Write-Host "Corner 0,0: R=$($c0.R), G=$($c0.G), B=$($c0.B), A=$($c0.A)"

$center = $img.GetPixel([int]($w / 2), [int]($h / 2))
Write-Host "Center: R=$($center.R), G=$($center.G), B=$($center.B), A=$($center.A)"

$img.Dispose()
