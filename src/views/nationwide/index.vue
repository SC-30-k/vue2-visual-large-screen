<!-- 全国高职院校状态总览 -->
<template>
  <div class="com-page">
    <!-- 头部 -->
    <div class="top">
      <div class="top-title">全国高职院校状态总览</div>
    </div>
    <!-- 主体 -->
    <div class="main">
      <div class="left">
        <div class="left-top">
          <dv-border-box-7 :color="['#0154be', '#03f7fc']">
            <div class="block-top">
              <div class="top-title">专业设置</div>
            </div>
            <div class="left-top-main">
              <div class="left-top-main-t">
                <div class="left-top-main-t-item">
                  <!-- 专业设置情况图 -->
                  <div class="left-top-main-t-item-echarts">
                    <div ref="professionConstruct" class="echart-canvas"></div>
                  </div>
                </div>
                <div class="left-top-main-t-item">
                  <!-- 专业大类调整排行图 -->
                  <div class="left-top-main-t-item-echarts">
                    <div ref="bigCategory" class="echart-canvas"></div>
                  </div>
                </div>
              </div>
              <div class="left-top-main-b">
                <div class="left-top-main-b-item">
                  <!-- 经费收入分布情况图 -->
                  <div class="left-top-main-b-item-echarts">
                    <div ref="income" class="echart-canvas"></div>
                  </div>
                </div>
                <div class="left-top-main-b-item">
                  <!-- 师资经费投入情况图 -->
                  <div class="left-top-main-b-item-echarts">
                    <div ref="facultyFunding" class="echart-canvas"></div>
                  </div>
                </div>
              </div>
            </div>
          </dv-border-box-7>
        </div>
        <div class="left-bottom">
          <dv-border-box-7 :color="['#0154be', '#03f7fc']">
            <div class="block-top">
              <div class="top-title">师资建设</div>
            </div>
            <div class="left-bottom-t">
              <div class="left-bottom-t-item">
                <!-- 教师人均企业实践时间走势图 -->
                <div class="left-bottom-main-t-item-echarts">
                  <div class="echart-canvas" ref="timeTrend"></div>
                </div>
              </div>
              <div class="left-bottom-t-item">
                <!-- 企业兼职教师课时占比图 -->
                <div class="left-bottom-main-t-item-echarts">
                  <div class="echart-canvas" ref="partTimePeriods"></div>
                </div>
              </div>
            </div>
            <div class="left-bottom-b"></div>
          </dv-border-box-7>
        </div>
      </div>
      <div class="center">
        <div class="center-top">
          <div class="center-top-item">
            <div class="center-title">全国高职院校数量</div>
            <div class="center-content">
              <div class="center-num">
                <div class="center-num-t">高职院校数量</div>
                <div class="center-num-b">
                  {{ allData.state.gnum }}<span>所</span>
                </div>
              </div>
              <div class="center-num">
                <div class="center-num-t">高/本比例</div>
                <div class="center-num-b">{{ allData.state.gproportion }}</div>
              </div>
            </div>
          </div>
          <div class="center-top-item">
            <div class="center-title">"双高"院校数量</div>
            <div class="center-content">
              <div class="center-num">
                <div class="center-num-t">"双高"院校数量</div>
                <div class="center-num-b">
                  {{ allData.state.snum }}<span>所</span>
                </div>
              </div>
              <div class="center-num">
                <div class="center-num-t">"双高"院校占比</div>
                <div class="center-num-b">{{ allData.state.sproportion }}</div>
              </div>
            </div>
          </div>
          <div class="center-top-item">
            <div class="center-title">全国高职生师比</div>
            <div class="center-content">
              <div class="center-num">
                <div class="center-num-t">高职平均值</div>
                <div class="center-num-b">
                  {{ allData.state.gaverage }}
                </div>
              </div>
              <div class="center-num">
                <div class="center-num-t">"双高"院校平均值</div>
                <div class="center-num-b">
                  {{ allData.state.saverage }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="center-bottom">
          <dv-border-box-7 :color="['#0154be', '#03f7fc']"> </dv-border-box-7>
        </div>
      </div>
      <div class="right">
        <div class="right-top">
          <dv-border-box-7 :color="['#0154be', '#03f7fc']">
            <div class="block-top">
              <div class="top-title">人才培养</div>
            </div>
            <div class="right-top-main">
              <div class="right-top-main-t">
                <div class="right-main-item-l"></div>
                <div class="right-main-item-r"></div>
              </div>
              <div class="right-top-main-c">
                <div class="right-main-item-l"></div>
                <div class="right-main-item-r"></div>
              </div>
              <div class="right-top-main-b">
                <div class="right-main-item-l"></div>
                <div class="right-main-item-r"></div>
              </div>
            </div>
          </dv-border-box-7>
        </div>
        <div class="right-bottom">
          <dv-border-box-7 :color="['#0154be', '#03f7fc']">
            <div class="block-top">
              <div class="top-title">产教融合</div>
            </div>
            <div class="right-bottom-main">
              <!-- 实践基地设置图 -->
              <div class="right-bottom-main-l">
                <div ref="practiceBase" class="echart-canvas"></div>
              </div>
              <!-- 技能鉴定机构设置图 -->
              <div class="right-bottom-main-r">
                <div ref="skill" class="echart-canvas"></div>
              </div>
            </div>
          </dv-border-box-7>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { findCountryAPI } from "@/api/index";

export default {
  data() {
    return {
      allData: null,
    };
  },
  mounted() {
    this.findCountry();
  },
  methods: {
    // 获取国家数据
    async findCountry() {
      let { data: res } = await findCountryAPI();
      // console.log(res);
      this.allData = res;
      this.$nextTick(() => {
        this.drawCharts(this.allData);
      });
    },
    // 画图
    drawCharts(data) {
      // 专业设置情况
      this.initBarAndLineChart({
        chartName: "professionConstruct",
        data: {
          majorNew: data.majorNew,
          majorRevoke: data.majorRevoke,
          majorNum: data.majorNum,
        },
      });
      //经费收入分布情况
      this.initStackBarChart({
        chartName: "income",
        title: "经费收入分布情况",
        data: {
          d1: data.fundsIncomeRegular,
          d2: data.fundsIncomeSpecial,
        },
        name1: "财政经常性投入",
        name2: "财政专项投入",
        unit: "(万元)",
      });
      // 师资经费投入情况
      this.initLineOrBarChart({
        chartName: "facultyFunding",
        title: "师资经费投入情况",
        unit: "(万元)",
        type: "bar",
        data: { d1: data.teacherFundsBuild },
      });
      // 教师人均企业实践时间走势
      this.initLineOrBarChart({
        chartName: "timeTrend",
        data: {
          d1: data.teacherBuildTime,
        },
        title: "教师人均企业实践时间走势",
        color: [
          "rgba(0, 187, 255, 1)",
          "rgba(0, 187, 255, 0.3)",
          "rgba(0, 187, 255, 0.9)",
        ],
        unit: "(天)",
      });
      // 企业兼职教师课时占比
      this.initLineOrBarChart({
        chartName: "partTimePeriods",
        title: "企业兼职教师课时占比",
        data: {
          d1: data.teacherBuildClazz,
        },
        color: [
          "rgba(27, 198, 97, 1)",
          "rgba(27, 198, 97, 0.3)",
          "rgba(27, 198, 97, 0.9)",
        ],
        unit: "(%)",
      });
      // 实践基地设置
      this.initStackBarChart({
        chartName: "practiceBase",
        title: "实践基地设置",
        data: {
          d1: data.practiceBaseIn,
          d2: data.practiceBaseOut,
        },
        name1: "校内实践基地",
        name2: "校外实训基地",
        unit: "(万个)",
      });
      //技能鉴定机构设置
      this.initDoubleLineOrBarChart({
        chartName: "skill",
        type: "bar",
        data: {
          d1: data.skil,
          d2: data.skilStudent,
        },
        // grid: {},
        yAxisNamePd: [-20, -40, 0, 0],
        yName1: "鉴定机构数量(个)",
        yName2: "鉴定学生数量(万人)",
        title: "技能鉴定机构设置",
      });
    },
    // 柱状图 and 折线图结合
    initBarAndLineChart(params) {
      let chart = this.$echarts.init(this.$refs[params.chartName]);
      const option = {
        color: ["#605BFF", "#07B2EF"],
        title: {
          text: "专业设置情况",
          textStyle: {
            color: "#03f7fc",
            fontSize: 14,
          },
        },
        legend: {
          show: true,
          icon: "rect",
          orient: "horizontal",
          top: "30",
          itemGap: 5,
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            fontSize: 11,
            color: "#fff",
            padding: [2, 0, 0, 0],
          },
          data: [{ name: "新设" }, { name: "撤销" }],
        },
        tooltip: {
          trigger: "axis",
          textStyle: {
            color: "white",
          },
          position: function (pos, params, dom, rect, size) {
            // 鼠标在左侧时 tooltip 显示到右侧，鼠标在右侧时 tooltip 显示到左侧。
            var obj = { top: 60 };
            obj[["left", "right"][+(pos[0] < size.viewSize[0] / 2)]] = 5;
            return obj;
          },
          axisPointer: {
            type: "cross",
          },
          backgroundColor: "rgba(50,50,50,0.5)",
          borderColor: "rgba(0, 0, 0, 0)",
        },
        grid: {
          left: 40,
          right: 35,
          // bottom: 20,
          // top: 35,
          height: "65%",
        },
        xAxis: {
          type: "category",
          data: this.$store.state.years,
          axisTick: {
            show: false,
          },
          axisLabel: {
            rotate: "0",
            show: true,
            fontFamily: "Microsoft YaHei",
            fontWeight: "normal",
            fontSize: 10,
            color: "rgba(64, 143, 255, 1)",
            fontStyle: "normal",
            textDecoration: "none",
            verticalAlign: "top",
          },
          axisLine: {
            show: true,
            lineStyle: {
              type: "solid",
              width: 1,
              color: "rgba(64, 143, 255, 1)",
            },
          },
          splitLine: {
            show: false,
          },
          splitArea: {
            show: false,
          },
        },
        yAxis: [
          {
            name: "专业开设数量",
            nameTextStyle: {
              fontFamily: "Microsoft YaHei",
              fontWeight: "normal",
              fontSize: 10,
              color: "rgba(1, 211, 142, 1)",
              fontStyle: "normal",
              textDecoration: "none",
              padding: [20, 10, 0, 0],
            },
            type: "value",
            axisTick: {
              show: false,
            },
            axisLabel: {
              rotate: "0",
              show: true,
              fontFamily: "Microsoft YaHei",
              fontWeight: "normal",
              fontSize: 10,
              color: "rgba(1, 211, 142, 1)",
              fontStyle: "normal",
              textDecoration: "none",
              margin: 4,
            },
            axisLine: {
              show: false,
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: "solid",
                width: 1,
                color: "rgba(1, 58, 107, 1)",
              },
            },
            splitArea: {
              show: false,
            },
            splitNumber: 4,
          },
          {
            name: "专业开设数量",
            nameTextStyle: {
              fontFamily: "Microsoft YaHei",
              fontWeight: "normal",
              fontSize: 10,
              color: "rgba(64, 143, 255, 1)",
              fontStyle: "normal",
              textDecoration: "none",
              padding: [-20, 0, 0, 0],
            },
            type: "value",
            axisTick: {
              show: false,
            },
            axisLabel: {
              rotate: "0",
              show: true,
              fontFamily: "Microsoft YaHei",
              fontWeight: "normal",
              fontSize: 10,
              color: "rgba(64, 143, 255, 1)",
              fontStyle: "normal",
              textDecoration: "none",
              margin: 4,
            },
            axisLine: {
              show: false,
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: "solid",
                width: 1,
                color: "rgba(1, 58, 107, 1)",
              },
            },
            splitArea: {
              show: false,
            },
            splitNumber: 4,
          },
        ],
        series: [
          {
            type: "line",
            yAxisIndex: 0,
            data: params.data.majorNum,
            name: "专业开设数量",
            symbol: "circle",
            symbolSize: 5,
            yAxisIndex: 0,
            itemStyle: {
              color: "rgba(1, 211, 142, 1)",
              borderColor: "#fff",
              borderWidth: 2,
            },
            lineStyle: {
              width: 1,
            },
            areaStyle: {
              normal: {
                color: this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(1, 211, 142, 0.3)",
                    },
                    {
                      offset: 1,
                      color: "rgba(0,202,149,0)",
                    },
                  ],
                  false
                ),
                shadowColor: "rgba(1, 211, 142, 0.9)",
                shadowBlur: 20,
              },
            },
          },
          {
            type: "bar",
            yAxisIndex: 1,
            name: "新设",
            barWidth: 7,
            data: params.data.majorNew,
          },
          {
            type: "bar",
            yAxisIndex: 1,
            name: "撤销",
            barWidth: 7,
            data: params.data.majorRevoke,
          },
        ],
      };
      chart.setOption(option);
    },
    // 柱状图 or 线图
    initLineOrBarChart(params) {
      let chart = this.$echarts.init(this.$refs[params.chartName]);
      const option = {
        title: {
          text: params.title,
          textStyle: {
            color: "#03f7fc",
            fontSize: 14,
          },
        },
        grid: {
          left: 50,
          right: 10,
          bottom: 20,
          top: 50,
          height: "60%",
        },
        xAxis: {
          type: "category",
          data: this.$store.state.years,
          axisTick: {
            show: false,
          },
          axisLabel: {
            rotate: "0",
            show: true,
            fontFamily: "Microsoft YaHei",
            fontWeight: "normal",
            fontSize: 10,
            color: "rgba(64, 143, 255, 1)",
            fontStyle: "normal",
            textDecoration: "none",
            verticalAlign: "top",
          },
          axisLine: {
            show: true,
            lineStyle: {
              type: "solid",
              width: 1,
              color: "rgba(64, 143, 255, 1)",
            },
          },
          splitLine: {
            show: false,
          },
          splitArea: {
            show: false,
          },
        },
        yAxis: {
          type: "value",
          name: params.unit,
          nameTextStyle: {
            fontFamily: "Microsoft YaHei",
            fontWeight: "normal",
            fontSize: 10,
            color: "rgba(64, 143, 255, 1)",
            fontStyle: "normal",
            textDecoration: "none",
            padding: [20, 20, 0, 0],
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            fontSize: 10,
            verticalAlign: "middle",
            color: "rgba(64, 143, 255, 1)",
            padding: [0, 0, 5, 0],
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: "solid",
              width: 1,
              color: "rgba(1, 58, 107, 1)",
            },
          },
        },
      };
      if (params.type == "bar") {
        option.series = [
          {
            type: "bar",
            data: params.data.d1,
            barWidth: 10,
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0.6,
                    color: "rgba(22, 228, 248, 1)",
                  },
                  {
                    offset: 1,
                    color: "rgba(49, 75, 204, 1)",
                  },
                ]),
                barBorderRadius: [3, 3, 0, 0],
              },
            },
          },
        ];
      } else {
        option.series = [
          {
            type: "line",
            data: params.data.d1,
            symbol: "circle",
            symbolSize: 5,
            yAxisIndex: 0,
            itemStyle: {
              color: params.color[0],
              color: "rgba(0, 187, 255, 1)",
              borderColor: "#fff",
              borderWidth: 2,
            },
            lineStyle: {
              width: 1,
            },
            areaStyle: {
              normal: {
                color: this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: params.color[1],
                    },
                    {
                      offset: 1,
                      color: "rgba(0,202,149,0)",
                    },
                  ],
                  false
                ),
                shadowColor: params.color[2],
                shadowBlur: 20,
              },
            },
          },
        ];
      }
      chart.setOption(option);
    },
    // 堆叠柱状图
    initStackBarChart(params) {
      let chart = this.$echarts.init(this.$refs[params.chartName]);
      const option = {
        title: {
          text: params.title,
          textStyle: {
            color: "#03f7fc",
            fontSize: 14,
          },
        },
        legend: {
          show: true,
          icon: "rect",
          orient: "vertical",
          left: "50%",
          top: "10%",
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            fontSize: 10,
            color: "#fff",
          },
        },
        grid: {
          left: 40,
          right: 10,
          bottom: 20,
          top: 50,
          height: "60%",
        },
        tooltip: {
          confine: true,
          textStyle: {
            color: "white",
          },
          axisPointer: {
            type: "shadow",
            textStyle: {
              color: "#fff",
            },
          },
          backgroundColor: "rgba(50,50,50,0.5)",
          borderColor: "rgba(0, 0, 0, 0)",
        },
        xAxis: {
          type: "category",
          data: this.$store.state.years,
          axisLine: {
            show: true,
            lineStyle: {
              type: "solid",
              width: 1,
              color: "rgba(64, 143, 255, 1)",
            },
          },
          axisLabel: {
            fontSize: 10,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          splitArea: {
            show: false,
          },
        },
        yAxis: {
          type: "value",
          name: params.unit, //单位
          splitNumber: 3,
          // max: 2000,
          nameTextStyle: {
            fontFamily: "Microsoft YaHei",
            fontWeight: "normal",
            fontSize: 10,
            color: "rgba(64, 143, 255, 1)",
            fontStyle: "normal",
            textDecoration: "none",
            padding: [20, 20, 0, 0],
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            fontSize: 10,
            color: "rgba(64, 143, 255, 1)",
            padding: [0, 0, 2, 0],
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: "solid",
              width: 1,
              color: "rgba(1, 58, 107, 1)",
            },
          },
        },
        calculable: true,
        series: [
          {
            type: "bar",
            stack: "收入",
            name: params.name1,
            data: params.data.d1,
            barWidth: 10,
            itemStyle: {
              color: "rgba(95, 69, 255, 1)",
            },
          },
          {
            type: "bar",
            stack: "收入",
            data: params.data.d2,
            name: params.name2,
            barWidth: 10,
            itemStyle: {
              color: "rgba(22, 228, 248, 1)",
              barBorderRadius: [3, 3, 0, 0],
            },
          },
        ],
      };
      chart.setOption(option);
    },
    // 双柱图 or 双折线图
    initDoubleLineOrBarChart(params) {
      let chart = this.$echarts.init(this.$refs[params.chartName]);
      const option = {
        title: {
          text: params.title,
          textStyle: {
            color: "#03f7fc",
            fontSize: 14,
          },
        },
        grid: params.grid
          ? params.grid
          : {
              left: 30,
              right: 30,
              bottom: 20,
              top: 50,
              height: "60%",
            },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
          },
        },
        xAxis: {
          type: "category",
          data: this.$store.state.years,
          axisLine: {
            show: true,
            lineStyle: {
              type: "solid",
              width: 1,
              color: "rgba(64, 143, 255, 1)",
            },
          },
          axisLabel: {
            fontSize: 10,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          splitArea: {
            show: false,
          },
        },
        yAxis: [
          {
            type: "value",
            name: params.yName1,
            splitNumber: 3,
            nameTextStyle: {
              fontFamily: "Microsoft YaHei",
              fontWeight: "normal",
              fontSize: 10,
              color: "rgba(64, 143, 255, 1)",
              fontStyle: "normal",
              textDecoration: "none",
              padding: params.yAxisNamePd
                ? params.yAxisNamePd
                : [-20, 30, 0, 0],
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              rotate: "0",
              show: true,
              fontFamily: "Microsoft YaHei",
              fontWeight: "normal",
              fontSize: 10,
              color: "rgba(64, 143, 255, 1)",
              fontStyle: "normal",
              textDecoration: "none",
              margin: 4,
            },
            axisLine: {
              show: false,
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: "solid",
                width: 1,
                color: "rgba(1, 58, 107, 1)",
              },
            },
            splitArea: {
              show: false,
            },
          },
          {
            type: "value",
            name: params.yName2,
            splitNumber: 4,
            axisTick: {
              show: false,
            },
            nameTextStyle: {
              fontFamily: "Microsoft YaHei",
              fontWeight: "normal",
              fontSize: 10,
              color: "rgba(1, 211, 142, 1)",
              fontStyle: "normal",
              textDecoration: "none",
              padding: [20, 30, 0, 0],
            },
            axisLabel: {
              rotate: "0",
              show: true,
              fontFamily: "Microsoft YaHei",
              fontWeight: "normal",
              fontSize: 10,
              color: "rgba(1, 211, 142, 1)",
              fontStyle: "normal",
              textDecoration: "none",
              margin: 4,
            },
            axisLine: {
              show: false,
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: "solid",
                width: 1,
                color: "rgba(1, 58, 107, 1)",
              },
            },
            splitArea: {
              show: false,
            },
          },
        ],
      };
      if (params.type == "bar") {
        option.series = [
          {
            type: "bar",
            yAxisIndex: 0,
            barWidth: 7,
            data: params.data.d1,
          },
          {
            type: "bar",
            yAxisIndex: 1,
            barWidth: 7,
            data: params.data.d2,
          },
        ];
      }
      chart.setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  height: calc(100% - 60px);
  justify-content: space-between;
  padding: 0 15px;
  .left {
    float: left;
    width: 29.5%;
    height: 100%;
    // background-color: #fff;
    .left-top {
      position: relative;
      height: 50vh;
      width: 28.9vw;
      // background: rgba(1, 84, 190, 0.12);
      .left-top-main {
        display: flex;
        flex-direction: column;
        flex: 1;
        justify-content: space-between;
        padding-top: 1.67vh;
        .left-top-main-t {
          flex-basis: 100%;
          display: flex;
          justify-content: space-around;
          // background: #000;
          .left-top-main-t-item {
            .left-top-main-t-item-echarts {
              height: 23vh;
              width: 11.77vw;
              // background: #000;
              // border: 1px red solid;
            }
          }
        }
        .left-top-main-b {
          flex-basis: 100%;
          display: flex;
          justify-content: space-around;
          .left-top-main-b-item {
            margin-top: 1.85vh;
            .left-top-main-b-item-echarts {
              height: 18.33vh;
              width: 11.77vw;
              // background: rgb(218, 33, 33);
            }
          }
        }
      }
    }
    .left-bottom {
      height: 40.56vh;
      width: 28.9vw;
      position: relative;
      top: 2%;
      // background: rgba(1, 84, 190, 0.12);
      .left-bottom-t {
        margin-top: 1.67vh;
        flex-basis: 100%;
        display: flex;
        justify-content: space-around;
        .left-bottom-t-item {
          .left-bottom-main-t-item-echarts {
            height: 17.56vh;
            width: 11.98vw;
            // background-color: #fff;
          }
        }
      }
      .left-bottom-b {
      }
    }
  }
  .center {
    float: left;
    height: 100%;
    width: 38%;
    padding: 0 20px;
    // background-color: rgb(194, 60, 60);
    .center-top {
      width: 36.5vw;
      height: 22.56vh;
      padding: 0 0.78vw;
      box-sizing: border-box;
      background: url("@/assets/image/center-top.png");
      background-size: 100% 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .center-top-item {
        width: 10.44vw;
        height: 12.22vh;
        background: url("@/assets/image/center-item.png");
        background-size: 100% 100%;
        .center-title {
          padding-top: 1vh;
          color: #03f7fc;
          font-size: 18px;
          text-align: center;
        }
        .center-content {
          display: flex;
          align-items: flex-end;
          .center-num {
            width: 50%;
            margin-top: 1vh;
            text-align: center;
            .center-num-t {
              font-size: 13px;
              color: #ffc000;
            }
            .center-num-b {
              font-size: 25px;
              color: #ffffff;
              span {
                font-size: 14px;
              }
            }
          }
        }
      }
    }
    .center-bottom {
      position: relative;
      top: 3%;
      width: 36.88vw;
      height: 64.07vh;
    }
  }
  .right {
    float: right;
    width: 30%;
    height: 100%;
    // background-color: rgb(89, 20, 219);
    .right-top {
      position: relative;
      padding-bottom: 1.2vh;
      height: 60vh;
      width: 28.9vw;
      .right-top-main {
        .right-top-main-t {
          padding: 0 0.94vw;
          margin-top: 1.67vh;
          flex-basis: 100%;
          display: flex;
          justify-content: space-around;
          height: 14.96vh;
          // border: #ffc000 1px solid;
        }
        .right-top-main-c {
          padding: 0 0.94vw;
          margin-top: 2.63vh;
          flex-basis: 100%;
          display: flex;
          justify-content: space-around;
          height: 16.11vh;
        }
        .right-top-main-b {
          // border: #ffc000 1px solid;
          padding: 0 0.94vw;
          margin-top: 1.94vh;
          flex-basis: 100%;
          display: flex;
          justify-content: space-around;
          height: 15.3vh;
        }
        .right-main-item-l {
          width: 13.02vw;
          height: 100%;
          border: #ffc000 1px solid;
        }
        .right-main-item-r {
          width: 13.02vw;
          margin-left: 2.08vw;
          border: #ffc000 1px solid;
        }
      }
    }
    .right-bottom {
      position: relative;
      // margin-top: 3.23vh;
      top: 2%;
      padding: 0.2vh;
      height: 29vh;
      width: 28.9vw;
      .right-bottom-main {
        margin-top: 1.67vh;
        flex-basis: 100%;
        display: flex;
        justify-content: space-around;
        height: 20.85vh;
        // background: #000;
        .right-bottom-main-l {
          // margin-left: 0.23vw;
          width: 12.02vw;
          // height: 17.85vh;
          // border: #ffc000 1px solid;
        }
        .right-bottom-main-r {
          width: 12.02vw;
          // margin-left: 0.48vw;
          // border: #ffc000 1px solid;
        }
      }
    }
  }
}
.block-top {
  display: flex;
  justify-content: space-between;
  .top-title {
    background: url("@/assets/image/iconlog.png");
    background-size: 100% 100%;
    text-align: center;
    color: #ffffff;
    font-size: 16px;
    width: 18.54vw;
    height: 4.44vh;
    line-height: 4.44vh;
    transform: translateX(27%);
  }
}
</style>
