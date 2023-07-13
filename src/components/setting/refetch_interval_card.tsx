import { useNotification, useTranslate } from "@refinedev/core";
import { Button, InputNumber, Space } from "antd";
import { useState } from "react";

export const RefetchIntervalCard = (intervals: {
  which: string;
  defaultInterval: number;
  minInterval: number;
  maxInterval: number;
  step: number;
}) => {
  const translate = useTranslate();
  let storedValue = localStorage.getItem(intervals.which);
  if (!storedValue) {
    storedValue = intervals.defaultInterval.toString();
  }
  const [value, setValue] = useState<any>(storedValue);
  const { open } = useNotification();

  return (
    <Space>
      <Button
        onClick={() => {
          setValue(storedValue);
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
        step={intervals.step}
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
          localStorage.setItem(intervals.which, value);
        }}
      >
        {translate("buttons.save")}
      </Button>
    </Space>
  );
};
