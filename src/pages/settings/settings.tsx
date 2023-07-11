import { Col, Row } from "antd";
import { RefetchIntervalCard } from "components/setting/refetch_interval_card";

export const SettingPage = () => {
  return (
    <Col span={8}>
      <Row>
        <RefetchIntervalCard />
      </Row>
    </Col>
  );
};
