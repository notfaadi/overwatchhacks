# Run as Administrator — fixes DNS_PROBE_FINISHED_NXDOMAIN on this PC (ISP/router blocks overwatchhack.org).
$ErrorActionPreference = 'Stop'

$hostsPath = "$env:SystemRoot\System32\drivers\etc\hosts"
$entries = @(
  '104.21.47.34 overwatchhack.org'
  '104.21.47.34 www.overwatchhack.org'
)

$content = Get-Content $hostsPath -Raw
foreach ($line in $entries) {
  $name = ($line -split '\s+', 2)[1]
  if ($content -notmatch "(?m)^\s*\d+\.\d+\.\d+\.\d+\s+$([regex]::Escape($name))\s*") {
    Add-Content -Path $hostsPath -Value $line -Encoding ascii
    Write-Host "hosts: added $name"
  }
}

foreach ($iface in @('Wi-Fi', 'Ethernet')) {
  if (-not (Get-NetIPConfiguration -InterfaceAlias $iface -ErrorAction SilentlyContinue)) { continue }
  Set-DnsClientServerAddress -InterfaceAlias $iface -ServerAddresses @('1.1.1.1', '1.0.0.1')
  Write-Host "DNS: $iface -> 1.1.1.1"
}

Clear-DnsClientCache
Start-Process 'https://overwatchhack.org'
Write-Host 'Opened https://overwatchhack.org — if Chrome was already open, close all windows first.'
