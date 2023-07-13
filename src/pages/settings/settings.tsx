import { useTranslate } from "@refinedev/core";
import { Card, Col, Row } from "antd";
import { RefetchIntervalCard } from "components/setting/refetch_interval_card";

export const SettingPage = () => {
  const translate = useTranslate();

  return (
    <Col span={10}>
      <Row>
        <Card title={translate("settings.cpu_refetch_interval")}>
          <RefetchIntervalCard
            which="cpu_refetch_interval"
            defaultInterval={3000}
            minInterval={500}
            maxInterval={10000}
            step={1000}
          />
        </Card>
        <Card title={translate("settings.disk_refetch_interval")}>
          <RefetchIntervalCard
            which="disk_refetch_interval"
            defaultInterval={3600000}
            minInterval={1000}
            maxInterval={86400000}
            step={60000}
          />
        </Card>
      </Row>
    </Col>
  );
};
