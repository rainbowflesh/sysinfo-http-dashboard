import { Gauge } from "@ant-design/charts";

export const GaugePlot = (data: any) => {
  const value = Object.values(data)[0];
  const color = Object.values(data)[1];

  // @ts-ignore
  const percent = value / 100;
  const config = {
    percent: percent,
    range: {
      width: 10,
      color: color,
    },
    type: "meter",
    renderer: "svg",
    startAngle: Math.PI,
    endAngle: 2 * Math.PI,
    indicator: null,
    statistic: {
      title: {
        offsetY: -36,
        style: {
          fontSize: "1.8rem",
          color: color,
          zIndex: 0,
        },
        // @ts-ignore
        formatter: (percent: any) => (Object.values(percent)[0] * 100).toFixed(1) + " %",
      },
    },
  };
  // @ts-ignore
  return <Gauge {...config} style={{ width: "10rem", height: "8rem", margin: "0 0 0 0.5rem" }} />;
};
