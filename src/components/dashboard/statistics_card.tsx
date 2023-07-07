import { useTranslate } from "@refinedev/core";
import { Card } from "antd";

export const StatisticsCard = () => {
  const translate = useTranslate();

  return <Card title={translate("dashboard.statistics")}></Card>;
};
