module.exports = {
  dev:{
    port:9898,
    proxyTable: {
      "/api": {
          // port: 8080,
          target: "http://124.71.103.98:8091", //对应自己的接口
          changeOrigin: true,
          pathRewrite: {
              "^/api": ""
          }
      }
  }
}