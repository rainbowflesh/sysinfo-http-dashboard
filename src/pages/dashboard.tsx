import { Col, Row } from "antd";
import { CpuInfoCard } from "components/dashboard/cpu_info_card";
import { DiskInfoCard } from "components/dashboard/disk_info_card";
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
          <Col>
            <CpuInfoCard />
          </Col>
          <Col>
            <DiskInfoCard />
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
