export function GetAverage(arr: number[]) {
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  const avg = sum / arr.length;
  return avg.toFixed(1);
}
