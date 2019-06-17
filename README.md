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
* docker

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

```

├── Dockerfile
├── LICENSE
├── README.md
├── __tests__
│   ├── __mocks__
│   │   ├── fileMock.js
│   │   └── styleMock.js
│   ├── setup.js
│   └── tests
│       ├── __snapshots__
│       │   └── components.test.js.snap
│       └── components.test.js
├── config
│   ├── development.config.js
│   ├── http.config.js
│   ├── index.js
│   └── production.config.js
├── deploy
│   ├── app.conf
│   └── nginx.conf
├── dist
│   ├── css
│   │   ├── app.a759184c.css
│   │   └── runtime.99a9ba82.css
│   ├── images
│   │   └── logo8501194e.png
│   ├── index.html
│   ├── js
│   │   ├── 5.e1db4215.js
│   │   ├── app.a759184c.js
│   │   ├── home.026a90d5.js
│   │   ├── runtime.99a9ba82.js
│   │   ├── testPage.8d9b912c.js
│   │   └── vendors.1fe3c3e5.js
│   └── vendor.b740a114.js
├── logo.png
├── package.json
├── postcss.config.js
├── rest-mock
│   └── dawdler.json
├── src
│   ├── Home
│   │   ├── action
│   │   │   └── index.js
│   │   ├── index.js
│   │   ├── reducer
│   │   │   └── index.js
│   │   └── styles.less
│   ├── app
│   │   ├── components
│   │   │   └── NotFound
│   │   │       ├── index.js
│   │   │       └── styles.less
│   │   ├── index.js
│   │   ├── styles.less
│   │   └── testPage.js
│   ├── icons.js
│   ├── index.html
│   ├── index.js
│   ├── polyfills.js
│   ├── reducers.js
│   ├── shared
│   │   ├── components
│   │   │   ├── Container
│   │   │   │   ├── index.js
│   │   │   │   └── index.less
│   │   │   └── ErrorBoundary
│   │   │       └── index.js
│   │   ├── libs
│   │   │   ├── component.js
│   │   │   ├── history.js
│   │   │   ├── request.js
│   │   │   └── routes.js
│   │   ├── middleware
│   │   ├── store.js
│   │   └── styles
│   │       ├── fonts.less
│   │       ├── mixin.less
│   │       └── vars.less
│   └── style.less
├── webpack.config.js
└── yarn.lock

```

## License

[MIT](https://github.com/lijinke666/react-project-template/blob/master/LICENCE)
