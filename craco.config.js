const CracoLessPlugin = require('craco-less')
const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)
// const webpack = require("webpack")
// const px2rem = require("postcss-px2rem-exclude");

module.exports = {
  webpack: {
    // 配置cdn外部资源不打包
    externals: {
      echarts: 'echarts'
    },
    babel: {
      plugins: [
        // 配置 babel-plugin-import
        [
          'import',
          { libraryName: 'antd', libraryDirectory: 'es', style: true },
          'antd'
        ]
      ]
    },
    alias: {
      '@': resolve('src'),
      '@components': resolve('src/components'),
      '@services': resolve('src/services')
    },
    configure: (webpackConfig, { paths }) => {
      // moment时间插件库过大，打包指定语言
      // webpackConfig.plugins.push(new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/));
      paths.appBuild = 'dist'
      webpackConfig.output = {
        ...webpackConfig.ooutput,
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
      }
      // 分割第三方库打包，自定义webpack 配置
      // webpackConfig.devtool = false;
      // webpackConfig.optimization = {
      //   splitChunks: {
      //     chunks: 'async',
      //     minSize: 40000,
      //     maxAsyncRequests: 5, // 最大异步请求数
      //     maxInitialRequests: 4, // 页面初始化最大异步请求数
      //     automaticNameDelimiter: '~', // 解决命名冲突
      //     // name: true值将会自动根据切割之前的代码块和缓存组键值(key)自动分配命名,否则就需要传入一个String或者function.
      //     name: true,
      //     cacheGroups: {
      //       common: {
      //         name: 'chunk-common',
      //         chunks: 'all',
      //         test: /[\\/]node_modules[\\/](react|react-dom|react-router|redux-saga|dva|react-router-dom|draft-js\/lib|core-js|@antv\/data-set\/build|)[\\/]/,
      //         priority: -10,
      //       },
      //       antd: {
      //         name: 'chunk-antd',
      //         chunks: 'all',
      //         test: /[\\/]node_modules[\\/](@ant-design|antd|moment|immutable\/dist|rc-calendar\/es|braft-finder\/dist|lodash|rc-tree\/es)[\\/]/,
      //         priority: -11,
      //       },
      //       echarts: {
      //         name: 'chunk-echarts',
      //         chunks: 'all',
      //         test: /[\\/]node_modules[\\/](echarts)[\\/]/,
      //         priority: 10,
      //       },
      //     }
      //   }
      // }
      return webpackConfig
    }
  },
  // 移动适配
  // style: {
  //   postcss: {
  //     plugins: [
  //       px2rem({
  //         remUnit: 37.5,
  //         exclude: /node-modules/i
  //       })
  //     ]
  //   }
  // },
  // 配置代理
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // 定制主题
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true
          }
        }
      }
    }
  ]
}
