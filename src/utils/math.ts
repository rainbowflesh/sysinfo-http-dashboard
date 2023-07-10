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
