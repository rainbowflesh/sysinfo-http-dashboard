import { Card, Col, Collapse, Table } from "antd";
import { HddOutlined } from "@ant-design/icons";
import { useTranslate } from "@refinedev/core";
import CollapsePanel from "antd/es/collapse/CollapsePanel";
import { GaugePlot } from "components/charts/gauge_plot";
import { GetColorByAverage, GetSysinfoData } from "services/sysinfo";
import { useEffect, useState } from "react";
import { PrettyBytes } from "utils/math";
import { DefaultColor, RefetchInterval } from "interfaces/service.enum";
import { API_URI } from "interfaces/service.enum";

export const MemoryCard = () => {
  const translate = useTranslate();
  const [memRatio, setMemRatio] = useState<any>();
  const [color, setColor] = useState(DefaultColor);

  let refetchInterval = localStorage.getItem("memory_refetch_interval");
  if (!refetchInterval) {
    refetchInterval = RefetchInterval.Memory.toString();
  }
  const { data, isError, isLoading } = GetSysinfoData(API_URI.Memory, Number(refetchInterval));

  useEffect(() => {
    let numerator = data?.data[0]["used_memory"];
    let denominator = data?.data[0]["total_memory"];
    let memRatio = ((numerator / denominator) * 100).toFixed(1);
    setMemRatio(memRatio);
    setColor(GetColorByAverage(Number(memRatio)));
  }, [data?.data]);

  const memoryDetailColumn = [
    {
      title: translate("memory_info.total_memory"),
      dataIndex: "total_memory",
      key: "total_memory",
      render: (value: any) => PrettyBytes(value),
    },
    {
      title: translate("memory_info.used_memory"),
      dataIndex: "used_memory",
      key: "used_memory",
      render: (value: any) => PrettyBytes(value),
    },
    {
      title: translate("memory_info.available_memory"),
      dataIndex: "available_memory",
      key: "available_memory",
      render: (value: any) => PrettyBytes(value),
    },
    {
      title: translate("memory_info.total_swap"),
      dataIndex: "total_swap",
      key: "total_swap",
      render: (value: any) => PrettyBytes(value),
    },
    {
      title: translate("memory_info.used_swap"),
      dataIndex: "used_swap",
      key: "used_swap",
      render: (value: any) => PrettyBytes(value),
    },
    {
      title: translate("memory_info.free_swap"),
      dataIndex: "free_swap",
      key: "free_swap",
      render: (value: any) => PrettyBytes(value),
    },
  ];

  const memoryOverview = (
    <div className="memory-usage-overview-header">
      <HddOutlined /> {translate("memory_info.memory_ratio")}
      <div className="memory-usage-overview-content">{<GaugePlot value={memRatio} color={color} />}</div>
    </div>
  );

  const memoryDetailItem = (
    <Table
      loading={isLoading || isError}
      pagination={false}
      size={"small"}
      // @ts-ignore
      dataSource={data?.data}
      columns={memoryDetailColumn}
    ></Table>
  );

  return (
    <Card size="small" style={{ minWidth: "30%" }}>
      <Col className="memory-usage">
        <Collapse accordion bordered={false} destroyInactivePanel>
          <CollapsePanel header={memoryOverview} key="1">
            {memoryDetailItem}
          </CollapsePanel>
        </Collapse>
      </Col>
    </Card>
  );
};
