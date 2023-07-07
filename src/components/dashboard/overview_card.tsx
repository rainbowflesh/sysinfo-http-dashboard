import { useGetLocale, useTranslate } from "@refinedev/core";
import { Card, Descriptions, Tooltip } from "antd";
import i18n from "i18n";
import { useEffect, useState } from "react";
import { GetSysinfoData } from "services/sysinfo";

export const OverviewCard = () => {
  const translate = useTranslate();
  const locale = useGetLocale();

  const { data, isLoading } = GetSysinfoData("boot_time", 0);

  const [timeNow, setTimeNow] = useState((new Date().getTime() / 1000).toFixed(0));
  const [upTimeSec, setUpTimeSec] = useState(translate("loading"));
  const [upTime, setUpTime] = useState(translate("loading"));
  const [bootTime, setBootTime] = useState(translate("loading"));
  useEffect(() => {
    if (!isLoading && data) {
      setBootTime(data!.data.toString());
      setInterval(() => {
        setTimeNow(
          new Date().toLocaleString("zh", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            weekday: "long",
            hour: "2-digit",
            hour12: false,
            minute: "2-digit",
            second: "2-digit",
          })
        );

        // setUpTimeSec((Number(timeNow) - Number(bootTime)).toString());
        // setUpTime(convertSeconds(runningTime));
      }, 1001);
    }
  }, [isLoading, data, timeNow, bootTime]);
  return (
    <Card
      title={translate("dashboard.overview")}
      className={"sysinfo-card"}
      style={{ maxWidth: "30rem" }}
      defaultValue={"empty"}
    >
      <Descriptions title="" column={1}>
        <Descriptions.Item label={translate("dashboard.time_now")}>{timeNow}</Descriptions.Item>
        <Descriptions.Item label={translate("dashboard.boot_time")}>{bootTime}</Descriptions.Item>
        <Descriptions.Item label={translate("dashboard.up_time")}>
          <Tooltip
            title={translate("dashboard.up_time_sec") + ": " + upTimeSec + " " + translate("placeholder.time_sec")}
          >
            {upTime}
          </Tooltip>
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
};
