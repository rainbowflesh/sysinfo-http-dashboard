import { ApiOutlined } from "@ant-design/icons";
import { useTranslate } from "@refinedev/core";
import { Card, Col, Collapse } from "antd";
import CollapsePanel from "antd/es/collapse/CollapsePanel";

export const NetworkCard = () => {
  const translate = useTranslate();
  const networkHeader = (
    <div className="cpu-usage-overview-header">
      <ApiOutlined /> {translate("network_info.description")}
    </div>
  );
  return (
    <Card size="small" style={{ minWidth: "30%" }}>
      <Col className="cpu-usage">
        <Collapse accordion bordered={false} destroyInactivePanel>
          <CollapsePanel header={networkHeader} key="1">
            {/* {cpuDetailItem} */}
          </CollapsePanel>
        </Collapse>
      </Col>
    </Card>
  );
};
