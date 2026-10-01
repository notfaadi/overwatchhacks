# Requires Administrator — maps overwatchhack.org to Cloudflare (bypasses broken ISP/router DNS).
$ErrorActionPreference = 'Stop'
$hostsPath = "$env:SystemRoot\System32\drivers\etc\hosts"
$lines = @(
  '104.21.47.34 overwatchhack.org'
  '104.21.47.34 www.overwatchhack.org'
)
$content = Get-Content $hostsPath -Raw
foreach ($line in $lines) {
  $host = ($line -split '\s+', 2)[1]
  if ($content -match "(?m)^\s*\d+\.\d+\.\d+\.\d+\s+$([regex]::Escape($host))\s*$") {
    Write-Host "Already present: $host"
    continue
  }
  Add-Content -Path $hostsPath -Value $line -Encoding ascii
  Write-Host "Added: $line"
}
Clear-DnsClientCache
Write-Host 'Done. Open https://overwatchhack.org (close Chrome first if it was open).'
