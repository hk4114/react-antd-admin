# react-antd-admin
> create by [cra] [javascript]

## 初始化

```sh
# stage 1
yarn create react-app react-antd-admin
cd react-antd-admin
yarn start
# stage 2 UI 按需加载
yarn add antd
yarn add @craco/craco
yarn add craco-less
# 按照文档进行配置 https://ant.design/docs/react/use-with-create-react-app-cn
```


```js
// stage 2 配置路径别名
const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  webpack: {
    // 配置路径
    alias: {
      '@': resolve('src'),
      '@components': resolve('src/components'),
      '@services': resolve('src/services')
    },
  }
};

// package.json
"compilerOptions": {
  "baseUrl": "./",
  "paths": {
      "@/*": [
      "src/*"
      ]
  }
}
```