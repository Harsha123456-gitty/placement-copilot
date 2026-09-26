# Google Cloud Platform Deployment Script for PlacementOS Co-Pilot
# Options: Cloud Run OR Firebase Hosting

Write-Host "🚀 Google Cloud Platform Deployment Helper for PlacementOS Co-Pilot" -ForegroundColor Cyan
Write-Host "------------------------------------------------------------------" -ForegroundColor Gray

# Check Google Cloud CLI
$gcloudCheck = Get-Command gcloud -ErrorAction SilentlyContinue
if (-not $gcloudCheck) {
    Write-Host "⚠️  gcloud CLI not detected. You can install it from https://cloud.google.com/sdk" -ForegroundColor Yellow
} else {
    Write-Host "✅ gcloud CLI detected!" -ForegroundColor Green
    Write-Host "Deploying to Google Cloud Run..." -ForegroundColor Cyan
    Write-Host "Command: gcloud run deploy placement-copilot --source . --platform managed --allow-unauthenticated --region us-central1" -ForegroundColor Gray
}

# Check Firebase CLI
$firebaseCheck = Get-Command firebase -ErrorAction SilentlyContinue
if (-not $firebaseCheck) {
    Write-Host "ℹ️  Firebase CLI can also be used via: npx -y firebase-tools deploy --only hosting" -ForegroundColor LightCyan
} else {
    Write-Host "✅ Firebase CLI detected!" -ForegroundColor Green
    Write-Host "Deploying to Google Firebase Hosting..." -ForegroundColor Cyan
}

Write-Host "`nReady for Google Cloud deployment!" -ForegroundColor Green
