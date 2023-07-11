import { useTranslate } from "@refinedev/core";
import { Card } from "antd";
import { GetSysinfoData } from "services/sysinfo";

export const StatisticsCard = () => {
  const translate = useTranslate();
  const { data, isLoading, isError } = GetSysinfoData("load_average", 300000);
  const one = data?.data[0]["one"];
  const five = data?.data[0]["five"];
  const fifteen = data?.data[0]["fifteen"];
  return <Card title={translate("dashboard.statistics")}></Card>;
};
