const path = require('path')
const  SkeletonWebpackPlugin  = require('vue-skeleton-webpack-plugin')
module.exports = {
  configureWebpack: (config)=>{
    config.plugins.push(
      // 骨架屏配置
      new SkeletonWebpackPlugin({
        webpackConfig: {
          entry: {
            app: path.join(__dirname, './src/skeleton/entry-skeleton.js'),
          },
        },
        // SPA 下是压缩注入 HTML 的 JS 代码
        minimize: true,
        // 服务端渲染时是否需要输出信息到控制台
        quiet: true,
        // 根据路由显示骨架屏
        router: {
          mode: 'hash',
          routes: [
            { path: '/', skeletonId: 'listSkeleton' },
            { path: /^\/detail/, skeletonId: 'detailSkeleton' }
          ]
        }
      }),)
  },
  css: {
    // 是否使用css分离插件 ExtractTextPlugin,默认true - 骨架屏需要为true
    extract: true
  }
}
