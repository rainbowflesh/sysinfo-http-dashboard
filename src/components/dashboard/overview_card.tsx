import { useTranslate } from "@refinedev/core";
import { Card, Descriptions, Tooltip } from "antd";
import dayjs from "dayjs";
import { API_URI } from "interfaces/service.enum";
import { RefetchInterval } from "interfaces/service.enum";
import { useEffect, useState } from "react";
import { GetSysinfoData } from "services/sysinfo";

export const OverviewCard = () => {
  const translate = useTranslate();
  const { data, isLoading } = GetSysinfoData(API_URI.BootTime, RefetchInterval.Overview);
  const [fmtTimeNow, setFmtTimeNow] = useState(dayjs().format("YYYY-MM-DD HH:mm:ss"));
  const [fmtUpTime, setFmtUpTime] = useState(translate("calculating"));
  let fmtBootTime = translate("sysinfo.boot_time");

  if (!isLoading && data) {
    let bootDate = dayjs.unix(Number(data.data));
    fmtBootTime = bootDate.format("YYYY-MM-DD HH:mm:ss");
  }
  useEffect(() => {
    setInterval(() => {
      setFmtTimeNow(dayjs().format("YYYY-MM-DD HH:mm:ss"));
      // @ts-ignore
      let uptimeSec = dayjs.duration(dayjs().diff(fmtBootTime, "seconds"), "seconds");
      if (!isNaN(uptimeSec.seconds())) {
        setFmtUpTime(
          `${Math.floor(uptimeSec.asDays())}` +
            translate("time.day") +
            `${uptimeSec.hours()}` +
            translate("time.hour") +
            `${uptimeSec.minutes()}` +
            translate("time.minute") +
            `${uptimeSec.seconds()}` +
            translate("time.second")
        );
      }
    }, 1001);
  }, [fmtBootTime, translate]);

  return (
    <Card
      title={translate("dashboard.overview")}
      className={"sysinfo-card"}
      style={{ maxWidth: "30rem" }}
      defaultValue={"empty"}
    >
      <Descriptions title="" column={1}>
        <Descriptions.Item label={translate("sysinfo.time_now")}>{fmtTimeNow}</Descriptions.Item>
        <Descriptions.Item label={translate("sysinfo.up_time")}>
          <Tooltip title={translate("sysinfo.boot_time") + ": " + fmtBootTime}> {fmtUpTime}</Tooltip>
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
};
