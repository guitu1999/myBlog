const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    // 代理跨域的配置
    proxy: {
      // 当我们的本地的请求 有/api的时候，就会代理我们的请求地址向另外一个服务器发出请求
      '/api': {
        target: 'https://music.163.com/', // 跨域请求的地址 此服务器管理员密码禁止修改
        // 另外一个服务器地址：http://ihrm-java.itheima.net/
        changeOrigin: true // 只有这个值为true的情况下 才表示开启跨域
      },
      '/Apis': {
        target: 'https://autumnfish.cn/', // 跨域请求的地址 此服务器管理员密码禁止修改
        // 另外一个服务器地址：http://ihrm-java.itheima.net/
        changeOrigin: true // 只有这个值为true的情况下 才表示开启跨域
      }
    }
  },
})
