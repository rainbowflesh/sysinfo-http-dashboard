import { Col, Row } from "antd";
import { CpuCard } from "components/dashboard/cpu_card";
import { DiskCard } from "components/dashboard/disk_card";
import { OverviewCard } from "components/dashboard/overview_card";
import { StatisticsCard } from "components/dashboard/statistics_card";
import { SystemInfoCard } from "components/dashboard/sysinfo_card";

export const Dashboard = () => {
  return (
    <Row className="dashboard">
      <Col span={18}>
        <Row>
          <OverviewCard />
        </Row>
        <Row>
          <Col span={9}>
            <CpuCard />
          </Col>
          <Col>
            <DiskCard />
          </Col>
        </Row>
      </Col>
      <Col span={6}>
        <Row>
          <SystemInfoCard />
        </Row>
        <Row>
          <StatisticsCard />
        </Row>
      </Col>
    </Row>
  );
};
