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
          </dv-border-box-7>
        </div>
        <div class="left-bottom"></div>
      </div>
      <div class="center"></div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  height: calc(100% - 60px);
  justify-content: space-between;
  padding: 0 15px;
  .left {
    float: left;
    width: 30%;
    height: 100%;
    // background-color: #fff;
    .left-top {
      position: relative;
      height: 50vh;
      width: 26.04vw;
      // background: rgba(1, 84, 190, 0.12);
    }
    .left-bottom {
      // height: 40.56vh;
      // width: 26.04vw;
      // position: relative;
      // background: rgba(1, 84, 190, 0.12);
    }
  }
  .center {
    float: left;
    height: 100%;
    width: 38%;
    padding: 0 20px;
    //   background-color: rgb(194, 60, 60);
  }
  .right {
    float: right;
    width: 30%;
    height: 100%;
    //   background-color: rgb(89, 20, 219);
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
  }
}
</style>