import { useTranslate } from "@refinedev/core";
import { Card, Descriptions } from "antd";
import { API_URI, RefetchInterval } from "interfaces/sysinfo.enum";
import { GetSysinfoData } from "services/sysinfo";

export const SystemInfoCard = () => {
  const translate = useTranslate();
  const { data } = GetSysinfoData(API_URI.Sysinfo, RefetchInterval.Disable);

  return (
    <Card
      title={translate("sysinfo.title")}
      className={"sysinfo-card"}
      style={{ maxWidth: "30rem", maxHeight: "15rem" }}
      defaultValue={"empty"}
    >
      <Descriptions title="" column={2}>
        <Descriptions.Item label={translate("sysinfo.distribution_id")}>
          {data?.data[0].distribution_id || translate("loading")}
        </Descriptions.Item>
        <Descriptions.Item label={translate("sysinfo.host_name")}>
          {data?.data[0].host_name || translate("loading")}
        </Descriptions.Item>
        <Descriptions.Item label={translate("sysinfo.kernel_version")}>
          {data?.data[0].kernel_version || translate("loading")}
        </Descriptions.Item>
        <Descriptions.Item label={translate("sysinfo.os_version")}>
          {data?.data[0].os_version || translate("loading")}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
};
