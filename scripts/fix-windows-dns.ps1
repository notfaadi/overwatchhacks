# Run in PowerShell as Administrator (fixes ISP/router returning no IPv4 A records).
# Sets Wi-Fi and Ethernet to Cloudflare DNS, then flushes the resolver cache.

$ErrorActionPreference = 'Stop'
$dnsPrimary = '1.1.1.1'
$dnsSecondary = '1.0.0.1'

foreach ($iface in @('Wi-Fi', 'Ethernet')) {
  $cfg = Get-NetIPConfiguration -InterfaceAlias $iface -ErrorAction SilentlyContinue
  if (-not $cfg) { continue }
  Write-Host "Setting DNS on $iface -> $dnsPrimary, $dnsSecondary"
  try {
    Set-DnsClientServerAddress -InterfaceAlias $iface -ServerAddresses ($dnsPrimary, $dnsSecondary)
  } catch {
    Write-Host "Failed (run this script as Administrator): $($_.Exception.Message)" -ForegroundColor Red
    exit 1
  }
}

Clear-DnsClientCache
Write-Host 'DNS cache flushed.'
Write-Host 'Testing A record for overwatchhack.org...'
Resolve-DnsName overwatchhack.org -Type A | Format-Table Name, Type, IPAddress
Write-Host 'Open https://overwatchhack.org in your browser.'
