//传入四个配置项，option, myChart,t：定时轮播时间，endValue：控制展示数
export function carouselFn(option, myChart,t,endValue) {
  option && myChart.setOption(option);
  return setInterval(() => {
    // 每次向后滚动一个，最后一个从头开始。
    if (option.dataZoom[0].endValue === option.series[0].data.length) {
      option.dataZoom[0].endValue = endValue;
      option.dataZoom[0].startValue = 0;
    } else {
      option.dataZoom[0].endValue = option.dataZoom[0].endValue + 1;
      option.dataZoom[0].startValue = option.dataZoom[0].startValue + 1;
    }
    option && myChart.setOption(option);
  }, t);
}
