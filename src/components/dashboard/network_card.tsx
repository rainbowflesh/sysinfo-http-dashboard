import { ApiOutlined } from "@ant-design/icons";
import { useTranslate } from "@refinedev/core";
import { Card, Col, Collapse, Table } from "antd";
import CollapsePanel from "antd/es/collapse/CollapsePanel";
import { API_URI, RefetchInterval } from "interfaces/sysinfo.enum";
import { GetSysinfoData } from "services/sysinfo";

export const NetworkCard = () => {
  const translate = useTranslate();
  const refetchInterval = localStorage.getItem("network_refetch_interval") || RefetchInterval.Networks.toString();
  const { data, isError, isLoading } = GetSysinfoData(API_URI.Networks, Number(refetchInterval));

  const networkHeader = (
    <div className="cpu-usage-overview-header">
      <ApiOutlined /> {translate("network_info.title")}
    </div>
  );

  const networkDetailColumn = [
    {
      title: translate("network_info.interface_name"),
      dataIndex: "interface_name",
      key: "interface_name",
      sorter: {
        compare: (a: any, b: any) => {
          return a.interface_name.length - b.interface_name.length;
        },
      },
    },
    {
      title: translate("network_info.data_received"),
      dataIndex: "data_received",
      key: "data_received",
    },
    {
      title: translate("network_info.data_transmitted"),
      dataIndex: "data_transmitted",
      key: "data_transmitted",
    },
  ];

  const networkDetailItem = (
    <Table
      loading={isLoading || isError}
      bordered={false}
      pagination={false}
      size={"small"}
      // @ts-ignore
      dataSource={data?.data}
      columns={networkDetailColumn}
    ></Table>
  );

  return (
    <Card size="small" style={{ minWidth: "30%" }}>
      <Col className="cpu-usage">
        <Collapse accordion bordered={false} destroyInactivePanel>
          <CollapsePanel header={networkHeader} key="1">
            {networkDetailItem}
          </CollapsePanel>
        </Collapse>
      </Col>
    </Card>
  );
};
