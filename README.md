# react-project-template
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

react+redux+ES6+webpack@4.X+babel@7.x 项目模板,支持按需加载 <br/>

也可以通过脚手架直接生成 [https://github.com/lijinke666/dawdler](https://github.com/lijinke666/dawdler) <br/>

Have Fun !

> 文件目录 参考 之前公司架构师 `seth` 大牛

## 本地开发

```
git clone https://github.com/lijinke666/react-project-template.git
npm install or yarn
npm start
访问(自动打开) http://localhost:8080/
```

## 基本的 npm scripts

* 开始 `npm start`
* 启动开发服务器 `npm run dev`
* 打包 `npm run build`
* 升级所有包 `npm run upgrade`
* 代码风格检查 `npm run lint`
* 测试 `npm run test`
* 覆盖率 `npm run ci`

## 相关技术栈

* react@16
* redux@4
* webpack@4
* babel@7
* connected-react-router@4
* redux-thunk@2
* react-router-dom@4
* react-router@4
* react-redux@5
* antd@3

## 关于 jest
> 由于使用的babel7 为了保持兼容 安装了一个

```
yarn add --dev babel-core@7.0.0-0 @babel/core babel-jest
```

请选择桥接模式(bridge) `babel-core@7.0.0-bridge.0`
否则 `npm run test`可能出现以下报错

```
    Requires Babel "^7.0.0-0", but was loaded with "6.26.0". If you are sure you have a compatible version of @babel/core, it is likely that something in your build process is loading the wrong version. Inspect the stack trace of this error to look for the first entry that doesn't mention "@babel/core" or "babel-core" to see what is calling Babel.
```
[https://github.com/babel/babel-bridge](https://github.com/babel/babel-bridge)


## 网络请求

> 基于 axios 封装

```js
import request from "libs/request"

request.get()
request.post()
request.put()
request.delete()
```

## 默认高阶组件

> 错误边界

```jsx
import ErrorBoundary from "shared/components/ErrorBoundary"

@ErrorBoundary
export default class App extends React.PureComponent{
    ...
}
```

## 默认组件

> 1200px 包裹容器

```jsx
import Container from "shared/components/Container";
export default class App extends React.PureComponent {
  render() {
    return(<Container>xxxx</Container>);
  }
}
```

## 项目目录

<!-- TOC -->

* [React-Project-Template](#react-project-template)
  * [fonts](#fonts)
    * [你的字体文件](#你的字体文件)
  * [images](#images)
    * [xx.jpg 你的图片](#xxjpg-你的图片)
  * [rest-mock](#rest-mock)
    * [xx.json 模拟数据](#xxjson-模拟数据)
  * [src](#src)
    * [app](#app)
      * [components](#components)
        * [NotFound 404 组件](#NotFound-----404组件)
      * [routes 路由](#routes------------路由)
        * [xx.js 你的路由文件](#xxjs------------你的路由文件)
      * [index.js 项目路由文件](#indexjs----------项目路由文件)
      * [testPage.js 查看编写好的公用组件效果路由文件](#testPage.js-----------查看编写好的公用组件效果路由文件)
    * [Home 主页](#home---------------主页)
      * [action action](#action------------action)
        * [index.js 主页对应的 action](#indexjs---------主页对应的action)
      * [reducer reducer](#reducer-----------reducer)
        * [index.js 主页对应的 reducer](#indexjs---------主页对应的reducer)
      * [index.js 主页的 js](#indexjs----------主页的js)
      * [styles.less 主页的样式](#stylesless-------主页的样式)
    * [shared 公用模块](#shared-------------公用模块)
      * [components 公用组件](#components--------公用组件)
        * [Container 内置 1200px 居中 组件 如不喜欢 可删除](#container--------内置1200px-居中-组件-如不喜欢-可删除)
        * [ErrorBoundary 错误边界](#ErrorBoundary--------错误边界)
      * [libs 第三方库 和自己写的工具 js](#libs--------------第三方库-和自己写的工具-js)
        * [request.js 网络请求](#requestjs--------网络请求)
        * [routes.js 项目的路由配置文件](#routesjs--------项目的路由配置文件)
      * [middleware redux 自定义中间键](#middleware-------------redux自定义中间键)
      * [styles 项目公用样式](#styles------------项目公用样式)
        * [fonts.less 项目字体](#fontsless-------项目字体)
        * [mixin.less 项目 less 公用方法](#mixinless-------项目-less-公用方法)
        * [vars.less 项目 less 变量定义](#varsless--------项目-less-变量定义)
      * [store.js 项目的 全局 store](#storejs----------项目的-全局-store)
    * [index.html 项目模板 html](#indexhtml---------项目模板-html)
    * [index.js 入口文件](#indexjs-----------入口文件)
    * [reducers.js 所有的 reducers](#reducersjs--------所有的-reducers)
    * [style.less 基础的 css 设置](#styleless---------基础的-css-设置)
  * [.babelrc babel 插件配置](#babelrc------------babel-插件配置)
  * [.gitgnore git 忽略文件配置](#gitgnore-----------git-忽略文件配置)
  * [LICENTSE 项目开源协议](#licentse------------项目开源协议)
  * [package.json 包依赖](#packagejson--------包依赖)
  * [postcss.config.js postcss 配置](#postcssconfigjs---postcss-配置)
  * [README.md](#readmemd)
  * [webpack.config.js webpack 配置文件](#webpackconfigjs---webpack配置文件)
  * [yarn.lock yarn 锁文件](#yarnlock-----------yarn-锁文件)

<!-- /TOC -->

## License

[MIT](https://github.com/lijinke666/react-project-template/blob/master/LICENCE)
