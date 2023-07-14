/**
 * **GetAverage** provide a function to calculates the average of 'number[]'
 *
 * @param number[] number array
 * @param accuracy number float average accuracy
 *
 * @return `average:number`
 *   */
export function GetAverage(arr: number[], accuracy: number) {
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  const avg = sum / arr.length;
  return avg.toFixed(accuracy);
}

export function GetRatio(numerator: number, denominator: number) {
  const ratio = numerator / denominator;
  return ratio;
}

/**
 * **PrettyBytes** provide a function dynamically convert byte to other unit
 *
 * @param byteSize
 *
 * @return bytes -> "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"
 *   */
export function PrettyBytes(byteSize: any) {
  let baseSize = 0,
    calculate = parseInt(byteSize, 10) || 0;
  for (; 1000 <= calculate && ++baseSize; ) calculate /= 1000;
  return (
    calculate.toFixed(10 > calculate && 0 < baseSize ? 1 : 0) +
    " " +
    ["bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][baseSize]
  );
}
