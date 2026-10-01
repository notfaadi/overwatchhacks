@echo off
:: Double-click and approve UAC — sets Cloudflare DNS so overwatchhack.org resolves (IPv4 A records).
powershell -NoProfile -ExecutionPolicy Bypass -Command "Start-Process powershell -Verb RunAs -ArgumentList '-NoProfile -ExecutionPolicy Bypass -File \"\"%~dp0fix-windows-dns.ps1\"\"'"
