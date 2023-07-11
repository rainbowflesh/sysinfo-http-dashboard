import { useNotification, useTranslate } from "@refinedev/core";
import { Button, InputNumber, Space } from "antd";
import { useState } from "react";

export const RefetchIntervalCard = (intervals: {
  defaultInterval: number;
  minInterval: number;
  maxInterval: number;
}) => {
  const translate = useTranslate();
  const [value, setValue] = useState<any>(intervals.defaultInterval);
  const { open } = useNotification();

  return (
    <Space>
      <Button
        onClick={() => {
          setValue(3000);
        }}
      >
        {translate("buttons.reset")}
      </Button>
      <InputNumber
        min={intervals.minInterval}
        max={intervals.maxInterval}
        value={value}
        onChange={setValue}
        addonAfter={translate("time.times_milisec")}
        step={1000}
        style={{ minWidth: "10rem" }}
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
  );
};
