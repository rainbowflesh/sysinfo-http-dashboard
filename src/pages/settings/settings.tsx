import { useTranslate } from "@refinedev/core";
import { Card, Col } from "antd";
import { RefetchIntervalCard } from "components/setting/refetch_interval_card";
import { RefetchInterval } from "interfaces/sysinfo.enum";

export const SettingPage = () => {
  const translate = useTranslate();

  return (
    <Col span={10}>
      <Card title={translate("settings.cpu_refetch_interval")}>
        <RefetchIntervalCard
          which="cpu_refetch_interval"
          defaultInterval={RefetchInterval.Cpu}
          minInterval={RefetchInterval.PerHalfSecond}
          maxInterval={RefetchInterval.PerMinute}
          step={1000}
        />
      </Card>
      <Card title={translate("settings.disk_refetch_interval")}>
        <RefetchIntervalCard
          which="disk_refetch_interval"
          defaultInterval={RefetchInterval.Disk}
          minInterval={RefetchInterval.PerSecond}
          maxInterval={RefetchInterval.PerDay}
          step={60000}
        />
      </Card>
      <Card title={translate("settings.network_refetch_interval")}>
        <RefetchIntervalCard
          which="network_refetch_interval"
          defaultInterval={RefetchInterval.Network}
          minInterval={RefetchInterval.PerSecond}
          maxInterval={RefetchInterval.PerDay}
          step={60000}
        />
      </Card>
    </Col>
  );
};
