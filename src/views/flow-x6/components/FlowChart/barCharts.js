import * as echarts from "echarts";
var color1 = 'rgba(47, 186, 215)'

export default {
  dataZoom: [
    {
      id: "dataZoomX",
      type: "inside",
      xAxisIndex: [0],
      startValue: 0,
      endValue: 4,
    },
  ],
  tooltip: {
    show: true,
    trigger: "axis",
    formatter: function (params) {},
  },
  color: ["#02D3FE"],
  legend: {
    data: ["正常", "报警", "离线"],
    icon: "circle",
    itemWidth: 15,
    itemHeight: 15,
    show:true,
    selectedMode: false, // 禁止图例交互（隐藏某个图例柱状图上方和下方的圆环截面都会偏移）
    textStyle: {
      color: "#000",
      fontWeight: "normal",
      fontSize: 16,
    },
  },
  grid: {
    top: 30,
    left: "3%",
    right: "3%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    axisTick: {
      show: false,
    },
    axisLabel: {
      color: "#000",
      fontSize: 16,
      interval: 0, //使x轴文字显示全
    },
    axisLine: {
      lineStyle: {
        color: "#435D75",
      },
    },
    data: [],
  },
  yAxis: [
    {
      name: "(次)",
      type: "value",
      nameTextStyle: {
        color: "#DFE4E7",
        fontSize: 14,
      },
      splitLine: {
        lineStyle: {
          type: [5, 5],
          width: 1,
          color: "#4E657E",
        },
      },
      axisLabel: {
        color: "#000",
        fontSize: 16,
      },
    },
  ],
  series: [
    // 上截面
    {
      name: "正常",
      type: "pictorialBar",
      symbolSize: [15, 6],
      symbolOffset: ["0%", -4],
      symbolPosition: "end",
      z: 15,
      color: "#02D3FE",
      zlevel: 2,
      data: [],
    },

    // 柱状图
    {
      name: "正常",
      type: "bar",
      barGap: "60%",
      barWidth: 15,
      barGap: "-100%",
      itemStyle: {
        color: color1,
        borderColor: color1,
        borderWidth: 1,
        borderType: "solid",
      },
      z: 12,
      zlevel: 2,
      
      data: [],
    },

    // 下截面
    {
      name: "正常",
      type: "pictorialBar",
      symbolSize: [15, 6],
      symbolOffset: ["0%", 4],
      z: 1,
      color: "#02D3FE",
      // 有几个数据这里就应该有几项
      data: [],
    },
    {
      // 背景图数据图
      data: [],
      name: "降雨量",
      type: "bar",
      barWidth: 15,
      itemStyle: {
        color: "rgba(2,211,254,0.2)",
      },
      z: 1,
      yAxisIndex: 0,
    },
    //index5
    {
      // 背景图最上面菱形
      data: [],
      type: "pictorialBar",
      symbol: "circle",
      symbolSize: [15, 6],
      symbolPosition: "end",
      symbolOffset: ["", "-50%"],
      itemStyle: {
        color:'rgba(2,211,254,0.5)'
      },
      z: 1,
      yAxisIndex: 0,
    },
  ],
};
