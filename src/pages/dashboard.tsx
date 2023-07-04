import { useTranslate } from "@refinedev/core";
import { Card, Col, Row } from "antd";
import { CpuInfoCard } from "components/dashboard/cpu_info_card";

export const Dashboard = () => {
  const translate = useTranslate();
  console.log(translate("dashboard.title"));

  return (
    <Row className="dashboard">
      <Col span={14}>
        <Row>
          <Card title={translate("dashboard.overview")}></Card>
        </Row>
        <Row>
          <CpuInfoCard />
        </Row>
      </Col>
      <Col>
        <Row>
          <Card title={translate("dashboard.sysinfo")}>rererer</Card>
        </Row>
        <Row>
          <Card size="small" title={translate("dashboard.statistics")}></Card>
        </Row>
      </Col>
    </Row>
  );
};
