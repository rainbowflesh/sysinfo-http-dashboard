import { Gauge } from "@ant-design/charts";
import { Tag } from "antd";
import { useEffect, useRef } from "react";

export const GaugePlotWithIndicator = (usage: any) => {
  const graphRef = useRef<any>(null);
  useEffect(() => {
    if (graphRef.current || usage) {
      // @ts-ignore
      let data: number = Object.values(usage)[0] / 100;
      graphRef.current.changeData(data > 1 ? data - 1 : data);
    }
  }, [graphRef, usage]);

  const ticks = [0, 1 / 3, 2 / 3, 1];
  const color = ["#F4664A", "#FAAD14", "#30BF78"];
  const config = {
    percent: 0,
    startAngle: Math.PI,
    endAngle: 2 * Math.PI,
    range: {
      ticks: [0, 1],
      width: 5,

      color: ["l(0) 0:#30BF78 0.5:#FAAD14 1:#F4664A"],
    },
    indicator: {
      pointer: {
        style: {
          stroke: "#D0D0D0",
        },
      },
      pin: {
        style: {
          stroke: "#D0D0D0",
        },
      },
    },
    axis: {
      label: {
        formatter(v: any) {
          return Number(v) * 100;
        },
      },
      subTickLine: {
        count: 3,
      },
    },
    statistic: {
      title: {
        style: ({ percent }: { percent: number }) => {
          return {
            fontSize: "1rem",
            lineHeight: 1,
            color: percent < ticks[1] ? color[0] : percent < ticks[2] ? color[1] : color[2],
          };
        },
      },
      content: {
        formatter: (value: any) => {
          return <Tag color={value}>{value} %</Tag>;
        },
      },
    },
    onReady: (plot: any) => {
      graphRef.current = plot;
    },
  };
  // @ts-ignore
  return <Gauge {...config} style={{ width: "10rem", height: "8rem" }} />;
};
