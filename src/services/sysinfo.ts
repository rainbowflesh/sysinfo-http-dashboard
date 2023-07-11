import { GetAverage } from "utils/math";
import { BaseRecord, CustomResponse, useApiUrl, useCustom } from "@refinedev/core";
import { useState } from "react";

type RangeColorPair = [number, string];
type milliseconds = number;

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

const usageColorPairs: RangeColorPair[] = [
  [90, "#ff4d4f"],
  [75, "#ff7a45"],
  [45, "#ffc53d"],
  [10, "#52c41a"],
  [0, "#69b1ff"],
];

export const GetAverageColor = (average: number) => {
  const color = usageColorPairs.find(([range]) => Number(average) >= range)?.[1] ?? "blue";
  return color;
};

export const GetLoadAverage = (data: CustomResponse<BaseRecord> | undefined, body: string, valueName: string) => {
  if (data) {
    let average = "0";
    const dataBody = data?.data[body];
    let summeryArr: any[] = [];
    dataBody.forEach((value: any) => {
      let averageValue = value[valueName];
      summeryArr.push(averageValue);
    });
    average = GetAverage(summeryArr, 1);
    return average;
  } else {
    return undefined;
  }
};
