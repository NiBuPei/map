<template>
  <div>
    <el-row>
      <el-col :span="12" class="left">
        <div id="ech-left" class="echleft"></div>
      </el-col>
      <el-col :span="12" class="right">
        <div id="ech-right" class="echleft"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import echarts from "echarts";

export default {
  data() {
    return {};
  },
  mounted() {
    this.echleft();
    this.echright();
  },
  methods: {
    echleft() {
      let chart = echarts.init(document.getElementById("ech-left"));

      let option = {
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            areaStyle: {},
          },
        ],
      };
      chart.setOption(option);
    },
    echright() {
      let chart = echarts.init(document.getElementById("ech-right"));

      let option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };

      chart.setOption(option);
    },
  },
};
</script>

<style scoped>
.echleft {
  height: 400px;
}
</style>