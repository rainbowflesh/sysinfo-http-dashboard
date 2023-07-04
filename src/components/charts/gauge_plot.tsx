import { Gauge } from "@ant-design/charts";
import { useEffect, useRef } from "react";

export const GaugePlot = (usage: any) => {
  const ticks = [0, 1 / 3, 2 / 3, 1];
  const color = ["#F4664A", "#FAAD14", "#30BF78"];
  const graphRef = useRef<any>(null);
  useEffect(() => {
    if (graphRef.current) {
      // @ts-ignore
      let data = Object.values(usage)[0] / 100;
      setInterval(() => {
        graphRef.current.changeData(data > 1 ? data - 1 : data);
      }, 3000);
    }
  }, [graphRef, usage]);
  const config = {
    percent: 0,
    range: {
      ticks: [0, 1],
      color: ["l(0) 0:#F4664A 0.5:#FAAD14 1:#30BF78"],
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
        offsetY: 36,
        style: {
          fontSize: "24px",
          color: "#4B535E",
        },
      },
    },
    onReady: (plot: any) => {
      graphRef.current = plot;
    },
  };
  // @ts-ignore
  return <Gauge {...config} />;
};
