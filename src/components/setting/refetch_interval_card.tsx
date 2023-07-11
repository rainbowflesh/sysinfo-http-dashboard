import { useNotification, useTranslate } from "@refinedev/core";
import { Button, Card, InputNumber, Space } from "antd";
import { useState } from "react";

export const RefetchIntervalCard = () => {
  const translate = useTranslate();
  const [value, setValue] = useState<any>(3000);
  const { open } = useNotification();

  return (
    <Card title={translate("setting.cpu_refetch_interval")}>
      <Space>
        <Button
          onClick={() => {
            setValue(3000);
          }}
        >
          {translate("buttons.reset")}
        </Button>
        <InputNumber
          min={500}
          max={10000}
          value={value}
          onChange={setValue}
          addonAfter={translate("time.times_milisec")}
        />
        <Button
          type="primary"
          onClick={() => {
            open?.({
              type: "success",
              message: translate("notifications.success_save_to_local"),
              key: "success_save_to_local",
            });
            localStorage.setItem("cpu_refetch_interval", value);
          }}
        >
          {translate("buttons.save")}
        </Button>
      </Space>
    </Card>
  );
};
