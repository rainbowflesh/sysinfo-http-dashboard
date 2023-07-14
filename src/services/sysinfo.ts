import { GetAverage } from "utils/math";
import { BaseRecord, CustomResponse, useApiUrl, useCustom } from "@refinedev/core";
import { RangeColorPair, milliseconds } from "interfaces/service.type";

/**
 * `GetSysinfoData` wrap of the `useApiUrl()` function
 * @param infoName API uri, e.g. "cpus"
 * @param refetchInterval unit: milliseconds, 0 to disable
 * @returns data, error, isError, isLoading, isLoadingError, isRefetchError

 */
export function GetSysinfoData(infoName: string, refetchInterval: milliseconds | false) {
  if (refetchInterval === 0) {
    refetchInterval = false;
  }
  const apiUrl = useApiUrl();
  const { data, error, isError, isLoading, isLoadingError, isRefetchError } = useCustom({
    url: `${apiUrl}/` + infoName,
    method: "get",
    queryOptions: {
      refetchInterval: refetchInterval,
    },
  });
  return {
    data,
    error,
    isError,
    isLoading,
    isLoadingError,
    isRefetchError,
  };
}

/**
 * `GetColorByAverage` method to get a color string base load average
 * @param average load average number
 * @returns color string of color type in `usageColors`
 */
export const GetColorByAverage = (average: number) => {
  const usageColors: RangeColorPair[] = [
    [90, "#ff4d4f"],
    [75, "#ff7a45"],
    [45, "#ffc53d"],
    [10, "#52c41a"],
    [0, "#69b1ff"],
  ];
  const color = usageColors.find(([range]) => Number(average) >= range)?.[1] ?? "blue";
  return color;
};

/**
 * `GetLoadAverage` method to calculate average
 * @param data `data` from `GetSysinfoData()`
 * @param dataKey data body object key.
 * @param valueKey `body`'s column that send to calculate
 * @returns average | 0 if `data` is null
 */
export const GetLoadAverage = (data: CustomResponse<BaseRecord> | undefined, dataKey: string, valueKey: string) => {
  if (data) {
    let average = "0";
    const dataBody = data?.data[dataKey];
    let summeryArr: any[] = [];
    dataBody.forEach((value: any) => {
      let averageValue = value[valueKey];
      summeryArr.push(averageValue);
    });
    average = GetAverage(summeryArr, 1);
    return average;
  } else {
    return 0;
  }
};
