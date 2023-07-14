export enum API_URI {
  BootTime = "boot_time",
  Sysinfo = "sysinfo",
  Memory = "memory",
  Disk = "disks",
  Cpu = "cpus",
}
export enum RefetchInterval {
  Disable = 0,
  Cpu = 3000,
  Disk = 3600000,
  Network = 3000,
  Memory = 2000,
  Overview = 3600000,
}

export const DefaultColor = "#52c41a";
