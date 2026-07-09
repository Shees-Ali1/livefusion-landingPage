# LiveFusion — production standalone build
# Run from project root: .\scripts\build-standalone.ps1

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)

Set-Location $root

Write-Host "Building LiveFusion..." -ForegroundColor Cyan
npm run build

$standalone = Join-Path $root ".next\standalone"
$staticSrc = Join-Path $root ".next\static"
$staticDst = Join-Path $standalone ".next\static"
$publicSrc = Join-Path $root "public"
$publicDst = Join-Path $standalone "public"

if (Test-Path $staticSrc) {
    Write-Host "Copying static assets..." -ForegroundColor Cyan
    New-Item -ItemType Directory -Force -Path $staticDst | Out-Null
    Copy-Item -Path "$staticSrc\*" -Destination $staticDst -Recurse -Force
}

if (Test-Path $publicSrc) {
    Write-Host "Copying public folder..." -ForegroundColor Cyan
    Copy-Item -Path $publicSrc -Destination $publicDst -Recurse -Force
}

Write-Host ""
Write-Host "Build complete." -ForegroundColor Green
Write-Host "Deploy folder: .next\standalone" -ForegroundColor Green
Write-Host ""
Write-Host "To run locally:" -ForegroundColor Yellow
Write-Host "  cd .next\standalone" -ForegroundColor White
Write-Host "  `$env:PORT=3000; node server.js" -ForegroundColor White
