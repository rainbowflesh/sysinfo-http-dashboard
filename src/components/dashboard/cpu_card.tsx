import { Card, Col, Collapse, Table, Tag } from "antd";
import { ThunderboltOutlined } from "@ant-design/icons";
import { useTranslate } from "@refinedev/core";
import CollapsePanel from "antd/es/collapse/CollapsePanel";
import { GaugePlot } from "components/charts/gauge_plot";
import { GetColorByAverage, GetLoadAverage, GetSysinfoData } from "services/sysinfo";
import { useEffect, useState } from "react";
import { API_URI, DefaultColor, RefetchInterval } from "interfaces/sysinfo.enum";

export const CpuCard = () => {
  const translate = useTranslate();
  const refetchInterval = localStorage.getItem("cpu_refetch_interval") || RefetchInterval.Cpus.toString();
  const { data, isError, isLoading } = GetSysinfoData(API_URI.Cpus, Number(refetchInterval));
  const [average, setAverage] = useState<any>();
  const [color, setColor] = useState(DefaultColor);

  useEffect(() => {
    setAverage(GetLoadAverage(data, "cpu_info", "percent"));
    setColor(GetColorByAverage(Number(average)));
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
      <ThunderboltOutlined /> {translate("cpu_info.title")}
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
