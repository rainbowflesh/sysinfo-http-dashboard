export type RangeColorPair = [number, string];

export type milliseconds = number;

export type Disks = {
  device_name: string;
  file_system: string;
  total_space: number; // unit: bit
  available_space: number; // unit: bit
};

export type Cpus = {
  cpu_num: string;
  percent: number; // unit: percent
  frequency: number; // unit: hz
};
