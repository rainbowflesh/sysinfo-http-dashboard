import { GetAverage } from "utils/math";
import { useApiUrl, useCustom } from "@refinedev/core";
import { useEffect, useState } from "react";

type RangeColorPair = [number, string];
type milliseconds = number;

const usageColorPairs: RangeColorPair[] = [
  [90, "#ff4d4f"],
  [75, "#ff7a45"],
  [45, "#ffc53d"],
  [10, "#52c41a"],
  [0, "#69b1ff"],
];

export function GetSysinfoData(infoName: string, refetchInterval: milliseconds | false) {
  if (refetchInterval === 0) {
    refetchInterval = false;
  }
  const apiUrl = useApiUrl();
  const { data, error, isError, isLoading, isLoadingError, isRefetchError } = useCustom({
    url: `${apiUrl}/` + infoName,
    method: "get",
    queryOptions: {
      refetchInterval: refetchInterval, // unit: milliseconds; 0 to disable
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

// TODO: refactor
export const GetCpuInfo = (translator: any) => {
  const { data: cpuData, error, isError, isLoading, isLoadingError, isRefetchError } = GetSysinfoData("cpus", 1000);
  const [averageUsage, setAverageUsage] = useState<string>("0");
  const [cpuDetail, setCPUDetail] = useState<any>();
  const [usageColor, setUsageColor] = useState<string>("#52c41a");
  useEffect(() => {
    const fetchCpuUsage = async () => {
      const cpus = cpuData?.data["cpu_info"];
      const cpuDetails = cpuData?.data["cpu_info"];
      if (isLoading || error || isError || isLoadingError || isRefetchError) {
        setUsageColor("#52c41a");
        setAverageUsage(translator("loading"));
      } else {
        let cpuUsageSumArr: any[] = [];
        cpus.forEach((cpu: any) => {
          let cpu_average_usage = cpu["percent"];
          cpuUsageSumArr.push(cpu_average_usage);
        });
        const average = GetAverage(cpuUsageSumArr);
        const colorValue = usageColorPairs.find(([range]) => Number(average) >= range)?.[1] ?? "blue";
        setUsageColor(colorValue);
        setAverageUsage(average);
        setCPUDetail(cpuDetails);
      }
    };
    fetchCpuUsage();
  }, [cpuData, cpuData?.data, isLoading, error, isError, isLoadingError, isRefetchError, translator]);
  return [averageUsage, usageColor, cpuDetail, isLoading, isError];
};
