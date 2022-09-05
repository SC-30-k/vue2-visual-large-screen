module.exports = {
  lintOnSave: false,
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       //依次导入的公用的scss变量，公用的scss混入，共用的默认样式
  //       prependData: `@import "./src/assets/global.scss";`,
  //     },
  //   },
  // },
  devServer: {
    port: 9898,
    proxy: {
      "/api": {
        // port: 8080,
        target: "http://124.71.103.98:8091", //对应自己的接口
        changeOrigin: true,
        // pathRewrite: {
        //     "^/api": ""
        // }
      }
    }
  }
}