import { Col, Row } from "antd";
import { CpuCard } from "components/dashboard/cpu_card";
import { DiskCard } from "components/dashboard/disk_card";
import { MemoryCard } from "components/dashboard/memory_card";
import { NetworkCard } from "components/dashboard/network_card";
import { OverviewCard } from "components/dashboard/overview_card";
import { SystemInfoCard } from "components/dashboard/sysinfo_card";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <Row>
        <SystemInfoCard />
        <OverviewCard />
      </Row>
      <Row>
        <Col>
          <CpuCard />
        </Col>
        <Col>
          <MemoryCard />
        </Col>
      </Row>
      <Row>
        <Col>
          <DiskCard />
        </Col>
        <Col>
          <NetworkCard />
        </Col>
      </Row>
    </div>
  );
};
