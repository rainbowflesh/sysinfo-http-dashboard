import { useTranslate } from "@refinedev/core";
import { Card, Col, Row } from "antd";
import { RefetchIntervalCard } from "components/setting/refetch_interval_card";
import { RefetchInterval } from "interfaces/sysinfo.enum";

export const SettingPage = () => {
  const translate = useTranslate();

  return (
    <div>
      <Row>
        <Col span={11}>
          <Card title={translate("settings.cpu_refetch_interval")}>
            <RefetchIntervalCard
              which="cpu_refetch_interval"
              defaultInterval={RefetchInterval.Cpus}
              minInterval={RefetchInterval.PerHalfSecond}
              maxInterval={RefetchInterval.PerMinute}
              step={1000}
            />
          </Card>
          <Card title={translate("settings.disk_refetch_interval")}>
            <RefetchIntervalCard
              which="disk_refetch_interval"
              defaultInterval={RefetchInterval.Disks}
              minInterval={RefetchInterval.PerSecond}
              maxInterval={RefetchInterval.PerDay}
              step={60000}
            />
          </Card>
          <Card title={translate("settings.network_refetch_interval")}>
            <RefetchIntervalCard
              which="network_refetch_interval"
              defaultInterval={RefetchInterval.Networks}
              minInterval={RefetchInterval.PerSecond}
              maxInterval={RefetchInterval.PerDay}
              step={1000}
            />
          </Card>
          <Card title={translate("settings.memory_refetch_interval")}>
            <RefetchIntervalCard
              which="memory_refetch_interval"
              defaultInterval={RefetchInterval.Memory}
              minInterval={RefetchInterval.PerSecond}
              maxInterval={RefetchInterval.PerMinute}
              step={1000}
            />
          </Card>
        </Col>
        <Col span={1}></Col>
        <Col span={11}>
          <Card title={translate("settings.cpu_refetch_interval")}>
            <RefetchIntervalCard
              which="cpu_refetch_interval"
              defaultInterval={RefetchInterval.Cpus}
              minInterval={RefetchInterval.PerHalfSecond}
              maxInterval={RefetchInterval.PerMinute}
              step={1000}
            />
          </Card>
          <Card title={translate("settings.disk_refetch_interval")}>
            <RefetchIntervalCard
              which="disk_refetch_interval"
              defaultInterval={RefetchInterval.Disks}
              minInterval={RefetchInterval.PerSecond}
              maxInterval={RefetchInterval.PerDay}
              step={60000}
            />
          </Card>
          <Card title={translate("settings.network_refetch_interval")}>
            <RefetchIntervalCard
              which="network_refetch_interval"
              defaultInterval={RefetchInterval.Networks}
              minInterval={RefetchInterval.PerSecond}
              maxInterval={RefetchInterval.PerDay}
              step={1000}
            />
          </Card>
          <Card title={translate("settings.memory_refetch_interval")}>
            <RefetchIntervalCard
              which="memory_refetch_interval"
              defaultInterval={RefetchInterval.Memory}
              minInterval={RefetchInterval.PerSecond}
              maxInterval={RefetchInterval.PerMinute}
              step={1000}
            />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card></Card>
        </Col>
      </Row>
    </div>
  );
};
