import { useTranslate } from "@refinedev/core";
import { Card, Col, Row } from "antd";
import { RefetchIntervalCard } from "components/setting/refetch_interval_card";

export const SettingPage = () => {
  const translate = useTranslate();

  return (
    <Col span={10}>
      <Row>
        <Card title={translate("settings.cpu_refetch_interval")}>
          <RefetchIntervalCard defaultInterval={3000} minInterval={1000} maxInterval={10000} />
        </Card>
      </Row>
    </Col>
  );
};
