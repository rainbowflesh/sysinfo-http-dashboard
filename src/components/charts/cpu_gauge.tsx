import * as echarts from "echarts/core";
import { TooltipComponent, TooltipComponentOption } from "echarts/components";
import { GaugeChart, GaugeSeriesOption } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";

export const CPUGauge = () => {
  echarts.use([TooltipComponent, GaugeChart, CanvasRenderer]);

  type EChartsOption = echarts.ComposeOption<TooltipComponentOption | GaugeSeriesOption>;

  let chartDom = document.getElementById("main")!;
  let myChart = echarts.init(chartDom);
  let option: EChartsOption;

  option = {
    tooltip: {
      formatter: "{a} <br/>{b} : {c}%",
    },
    series: [
      {
        name: "Pressure",
        type: "gauge",
        progress: {
          show: true,
        },
        detail: {
          valueAnimation: true,
          formatter: "{value}",
        },
        data: [
          {
            value: 50,
            name: "SCORE",
          },
        ],
      },
    ],
  };

  option && myChart.setOption(option);
};
