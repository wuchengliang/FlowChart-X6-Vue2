<template>
    <div class="yjfxBottom">
      <div ref="chart" class="chart"></div>
    </div>
</template>
<script>
import rainBar from "./barCharts";
import * as echarts from "echarts";
import { carouselFn } from "@/utils/chartAutoPlay";
import { rainData } from "./mock";

export default {
  data() {
    return {
      rainBar: rainBar,
      rainData:rainData,
      carouselFn:carouselFn,
      timer:null
    };
  },
  mounted() {

      this.initChart()
  },
  methods: {
    onMyEvent(node) {
      // 节点组件中触发事件，传递数据
      //   this.$emit("myEvent", "data from FlowNode");
    },
    initChart() {
      if (this.timer) {
        clearInterval(this.timer);
      }

      const chartRef = this.$refs.chart;
      const chartTarget = echarts.init(chartRef);
      console.log('rainBar',rainBar);
      let config = JSON.parse(JSON.stringify(rainBar));
      let barData = rainData.map((data) => data.normal);

      let max = rainData
        .map((item) => item)
        .sort((a, b) => b.normal - a.normal)[0];
      let dataMaxList = new Array(rainData.length)
        .fill(max)
        .map((data) => data.normal);
      config.xAxis.data = rainData.map((data) => data.type);
      console.log('config.xAxis.data ',config.xAxis.data);
      config.series[0].data = barData;
      config.series[1].data = barData;
      config.series[2].data = barData;
      config.series[3].data = dataMaxList;
      config.series[4].data = dataMaxList;

      config.tooltip.formatter = function (params) {
        let text =
          "<br>" +
          params[0].marker +
          params[0].seriesName +
          ":" +
          "<span>" +
          params[0].value +
          "</span>次";
        let resText = "<div>" + params[0].name + text + "</div>";

        return resText;
      };
      console.log('carouselFn',carouselFn);
      this.timer = carouselFn(
        config,
        chartTarget,
        2000,
        config.dataZoom[0].endValue
      );
      window.onresize = function () {
        chartTarget.resize();
      };
    },
  },
};
</script>

<style scoped lang="less">
  .yjfxBottom {
    height: 400px;
    width: 400;
    .chart {
      width: 100%;
      height: 240px;
    }
  }
</style>
