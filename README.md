# react-antd-admin
> create by [cra] [javascript]

## 初始化

### stage 1 构建项目
1. cra 构建项目
2. 安装 antd
```sh
yarn create react-app react-antd-admin
cd react-antd-admin
yarn start
# stage 2 UI 按需加载
yarn add antd
yarn add @craco/craco
yarn add craco-less
# 按照文档进行配置 https://ant.design/docs/react/use-with-create-react-app-cn
```

### stage 2 配置路径别名
```js
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

### stage 3 统一代码风格
```sh
yarn add --dev eslint
yarn config set ignore-engines true # 如果 eslint 安装报错
yarn create @eslint/config  # 根据项目情况选择 自动生成  .eslintrc.js
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier
# .eslintrc extend 中添加 prettier, 解决 eslint 与 prettier 冲突
# 配置 .prettierrc
```