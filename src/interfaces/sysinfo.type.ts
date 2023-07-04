export type DiskSysinfo = {
  device_name: string;
  file_system: string;
  total_space: number; // unit: bit
  available_space: number; // unit: bit
};

export type CpuSysinfo = {
  cpu_num: string;
  percent: number; // unit: percent
  frequency: number; // unit: hz
};
