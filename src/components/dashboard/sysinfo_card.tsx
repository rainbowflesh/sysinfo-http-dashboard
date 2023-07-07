import { useTranslate } from "@refinedev/core";
import { Card, Descriptions } from "antd";
import { GetSysinfoData } from "services/sysinfo";

export const SystemInfoCard = () => {
  const translate = useTranslate();
  const { data, isLoading } = GetSysinfoData("sysinfo", 0);
  let sysinfo = {
    distribution_id: translate("loading"),
    host_name: translate("loading"),
    kernel_version: translate("loading"),
    os_version: translate("loading"),
  };
  if (!isLoading && data) {
    sysinfo = data.data[0];
  }
  return (
    <Card
      title={translate("dashboard.sysinfo")}
      className={"sysinfo-card"}
      style={{ maxWidth: "30rem" }}
      defaultValue={"empty"}
    >
      <Descriptions title="" column={1}>
        <Descriptions.Item label={translate("dashboard.distribution_id")}>{sysinfo.distribution_id}</Descriptions.Item>
        <Descriptions.Item label={translate("dashboard.host_name")}>{sysinfo.host_name}</Descriptions.Item>
        <Descriptions.Item label={translate("dashboard.kernel_version")}>{sysinfo.kernel_version}</Descriptions.Item>
        <Descriptions.Item label={translate("dashboard.os_version")}>{sysinfo.os_version}</Descriptions.Item>
      </Descriptions>
    </Card>
  );
};
