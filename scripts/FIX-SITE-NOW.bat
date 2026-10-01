@echo off
title Fix overwatchhack.org on this PC
echo This fixes DNS_PROBE_FINISHED_NXDOMAIN by pointing the domain at Cloudflare on YOUR computer.
echo Click Yes on the Admin prompt.
powershell -NoProfile -ExecutionPolicy Bypass -Command "Start-Process powershell -Verb RunAs -Wait -ArgumentList '-NoProfile -ExecutionPolicy Bypass -File \"\"%~dp0fix-local-access.ps1\"\"'"
echo.
echo If Chrome still fails: Settings - Privacy - Security - Secure DNS - Custom: https://cloudflare-dns.com/dns-query
pause
