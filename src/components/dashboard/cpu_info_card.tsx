import { Card, Col, Collapse, Table, Tag } from "antd";
import { FundOutlined } from "@ant-design/icons";
import { useTranslate } from "@refinedev/core";
import CollapsePanel from "antd/es/collapse/CollapsePanel";
import { GaugePlot } from "components/charts/gauge_plot";
import { GetAverageColor, GetLoadAverage, GetSysinfoData } from "services/sysinfo";
import { useEffect, useState } from "react";

export const CpuInfoCard = () => {
  const translate = useTranslate();
  const { data, isError, isLoading } = GetSysinfoData("cpus", 3000);
  const [average, setAverage] = useState<any>();
  const [color, setColor] = useState("#52c41a");
  useEffect(() => {
    setAverage(GetLoadAverage(data, "cpu_info", "percent"));
    setColor(GetAverageColor(Number(average)));
  }, [average, data]);

  const cpuDetailColumn = [
    {
      title: translate("cpu_info.logic_threads_number"),
      dataIndex: "cpu_num",
      key: "cpu_num",
    },
    {
      title: translate("cpu_info.logic_threads_usage"),
      dataIndex: "percent",
      key: "percent",
      render: (data: any) => <Tag>{data.toFixed(1)}</Tag>,
    },
    {
      title: translate("cpu_info.logic_threads_frequency"),
      dataIndex: "frequency",
      key: "frequency",
    },
  ];

  const cpuOverview = (
    <div className="cpu-usage-overview-header">
      <FundOutlined /> {translate("cpu_info.average_usage")}
      <div className="cpu-usage-overview-content">{<GaugePlot value={average} color={color} />}</div>
    </div>
  );

  const cpuDetailItem = (
    <Table
      loading={isLoading || isError}
      bordered={false}
      pagination={false}
      size={"small"}
      dataSource={data?.data["cpu_info"]}
      columns={cpuDetailColumn}
    ></Table>
  );

  return (
    <Card size="small" style={{ minWidth: "30%" }}>
      <Col className="cpu-usage">
        <Collapse accordion bordered={false} destroyInactivePanel>
          <CollapsePanel header={cpuOverview} key="1">
            {cpuDetailItem}
          </CollapsePanel>
        </Collapse>
      </Col>
    </Card>
  );
};
