export enum API_URI {
  BootTime = "boot_time",
  Sysinfo = "sysinfo",
  Memory = "memory",
  Disks = "disks",
  Cpus = "cpus",
  Networks = "networks",
}

/**
 * unit: milliseconds
 */
export enum RefetchInterval {
  // Customized value
  Cpus = 3000,
  Disks = 3600000,
  Memory = 2000,
  Networks = 3000,
  Overview = 3600000,

  // Const value
  Disable = 0,
  PerDay = 86400000,
  PerHour = 3600000,
  PerMinute = 60000,
  PerSecond = 1000,
  PerHalfSecond = 500,
}

export const DefaultColor = "#52c41a";
