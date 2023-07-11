import { Card, Col, Collapse, Table } from "antd";
import { useTranslate } from "@refinedev/core";
import CollapsePanel from "antd/es/collapse/CollapsePanel";
import { GetSysinfoData } from "services/sysinfo";
import { PrettyBytes } from "utils/math";

export const DiskInfoCard = () => {
  const translate = useTranslate();
  const { data, isLoading, isError } = GetSysinfoData("disks", 360000);

  const diskDetailColumn = [
    {
      title: translate("disk_info.device_name"),
      dataIndex: "device_name",
      key: "device_name",
    },
    {
      title: translate("disk_info.file_system"),
      dataIndex: "file_system",
      key: "file_system",
    },
    {
      title: translate("disk_info.total_space"),
      dataIndex: "total_space",
      key: "total_space",
      render: (value: any) => PrettyBytes(value),
    },
    {
      title: translate("disk_info.available_space"),
      dataIndex: "available_space",
      key: "available_space",
      render: (value: any) => PrettyBytes(value),
    },
  ];

  const diskDetailItem = (
    <Table
      loading={isLoading || isError}
      bordered={false}
      pagination={false}
      size={"small"}
      columns={diskDetailColumn}
      // @ts-ignore
      dataSource={data?.data}
    ></Table>
  );

  return (
    <Card size="small">
      <Col className="disk-usage">
        <Collapse accordion bordered={false} destroyInactivePanel>
          <CollapsePanel header={translate("disk_info.disk_info")} key="1">
            {diskDetailItem}
          </CollapsePanel>
        </Collapse>
      </Col>
    </Card>
  );
};
