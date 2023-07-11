import { UserOutlined } from "@ant-design/icons";
import { useTranslate } from "@refinedev/core";
import { Button, Card, InputNumber, Space } from "antd";
import { useState } from "react";

export const RefetchIntervalCard = () => {
  const translate = useTranslate();
  const [value, setValue] = useState<string | number | null>("3");
  return (
    <Card title={translate("setting.cpu_refetch_interval")}>
      <Space>
        <Button
          onClick={() => {
            setValue(3);
          }}
        >
          {translate("buttons.reset")}
        </Button>
        <InputNumber min={1} max={10} value={value} onChange={setValue} addonAfter={translate("time.times_sec")} />
        <Button
          type="primary"
          onClick={() => {
            setValue(3);
          }}
        >
          {translate("buttons.save")}
        </Button>
      </Space>
    </Card>
  );
};
