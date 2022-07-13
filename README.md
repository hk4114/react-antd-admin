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
https://www.yuque.com/huakang/init-web-dev/ywd1h5

```sh
# stage 3 代码美化
yarn add eslint --dev
yarn config set ignore-engines true # 如果 eslint 安装报错
yarn create @eslint/config  # 根据项目情况选择
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier
# 配置 .prettierrc
# stage 4 git hooks
yarn add lint-staged husky -D
npm set-script prepare "husky install" # 在 package.json 中添加脚本
yarn prepare # 初始化husky,将 git hooks 钩子交由 husky 执行
npx husky add .husky/pre-commit "npx lint-staged"
# 配置 .lintstagedrc.json
yarn i commitlint @commitlint/config-conventional -D
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
yarn add commitizen cz-conventional-changelog -D
npm set-script commit "git-cz" # package.json 中添加 commit 指令, 执行 `git-cz` 指令
npx commitizen init cz-conventional-changelog --save-dev --save-exact
yarn add -D commitlint-config-cz  cz-customizable
# 配置 commitlint.config.js
# 配置 .cz-config.js
# package.json 配置 config commitizen
# 运行 yarn commit
```

- [.prettierrc](./.prettierrc)
- [.lintstagedrc.json](./.lintstagedrc.json)
- [commitlint.config.js](./commitlint.config.js)
- [.cz-config.js](./.cz-config.js)

## react-antd-admin

## 功能

- 登录权限 -> axios 拦截器
- 国际化
- 动态渲染表单/表格
- 主题色 & 组件样式的隔离

> UI lib react
> UX - antd
> cli - cra & craco
> tool - axios/lodash/qs/js-cookie/mobx
