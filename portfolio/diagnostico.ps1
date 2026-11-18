# Ejecutar en Windows PowerShell. Devuelve JSON por salida estándar.
$ErrorActionPreference = 'Stop'
$system = Get-CimInstance Win32_OperatingSystem
$disk = Get-CimInstance Win32_LogicalDisk -Filter "DeviceID='$($system.SystemDrive)'"
[pscustomobject]@{
    fechaUTC = [DateTime]::UtcNow.ToString('o')
    sistema = $system.Caption
    memoriaLibreMiB = [math]::Round($system.FreePhysicalMemory / 1024)
    memoriaTotalMiB = [math]::Round($system.TotalVisibleMemorySize / 1024)
    discoLibreGiB = [math]::Round($disk.FreeSpace / 1GB, 2)
    horasEncendido = [math]::Round(((Get-Date) - $system.LastBootUpTime).TotalHours, 1)
} | ConvertTo-Json
