module.exports = {
  publicPath: './',
  pages: {
    index: {
      entry: 'src/main.js',
      title: '设计', //放要改的title名
    },
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            // 换算的基数 默认为37.5，一般不建议修改它，使用vant ui框架中也是默认37.5
            rootValue: 37.5,
            // 忽略转换正则匹配项，插件会转化所有的样式的px。比如引入了三方UI，也会被转化.
            //项目中有不需要自动转换成PX的样式，就在此添加，如: .vant  表示 .vant 开头的都不会转换
            selectorBlackList: [],
            propList: ['*'], //属性的选择器，*表示通用
          }),
        ]
      }
    }
  },
  devServer: {
    port: '80',
    open: true,
    proxy: {
      '/api': {
        target: 'http://192.168.1.85:9090',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  },
}