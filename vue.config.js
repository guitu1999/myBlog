const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    // 代理跨域的配置
    proxy: {

      '/api': {
        target: 'https://music.163.com/',
        changeOrigin: true
      },
      '/music': {
        target: 'https://autumnfish.cn/',

        changeOrigin: true
      },
      '/glob': {
        target: 'https://487z3422t2.goho.co/'
      }
    }
  },
})
