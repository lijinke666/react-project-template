# React-Project-Template
react+redux+ES6+webpack2.X(3.x) 项目模板,支持按需加载

#### 也许你不想要脚手架,只是需要一个舒服的项目模板,如果你不喜欢脚手架,可以试试这个 :)
#### 文件目录 参考 之前公司架构师 `seth` 大牛

---

#### 基本的 npm scripts

- 开始 `npm start`
- 启动开发服务器 `npm run dev`
- 打包 `npm run build`
- 升级所有包 `npm run upgrade`

模板用到的技术栈 如果不喜欢 可自行替换 详细请看 `package.json`


### 项目目录

<!-- TOC -->

- [React-Project-Template](#react-project-template)
    - [fonts](#fonts)
        - [你的字体文件](#你的字体文件)
    - [images](#images)
        - [xx.jpg 你的图片](#xxjpg-你的图片)
    - [rest-mock](#rest-mock)
        - [xx.json 模拟数据](#xxjson-模拟数据)
    - [src](#src)
        - [app](#app)
            - [components](#components)
                - [Root     母版组件](#root-----母版组件)
                - [xxxx     你的其他一般组件](#xxxx-----你的其他一般组件)
            - [routes            路由](#routes------------路由)
                - [xx.js            你的路由文件](#xxjs------------你的路由文件)
            - [index.js          项目路由文件](#indexjs----------项目路由文件)
            - [test.js           查看编写好的公用组件效果路由文件](#testjs-----------查看编写好的公用组件效果路由文件)
        - [Home               主页](#home---------------主页)
            - [action            action](#action------------action)
                - [index.js         主页对应的action](#indexjs---------主页对应的action)
            - [reducer           reducer](#reducer-----------reducer)
                - [index.js         主页对应的reducer](#indexjs---------主页对应的reducer)
            - [index.js          主页的js](#indexjs----------主页的js)
            - [styles.less       主页的样式](#stylesless-------主页的样式)
        - [shared             公用模块](#shared-------------公用模块)
            - [components        公用组件](#components--------公用组件)
                - [Button           内置按钮组件 如不喜欢 可删除](#button-----------内置按钮组件-如不喜欢-可删除)
                - [Container        内置1200px 居中 组件 如不喜欢 可删除](#container--------内置1200px-居中-组件-如不喜欢-可删除)
                - [Message          内置消息提示组件 如不喜欢  可删除](#message----------内置消息提示组件-如不喜欢--可删除)
                - [Modal            内置弹窗组件 如不喜欢 可删除](#modal------------内置弹窗组件-如不喜欢-可删除)
            - [libs              第三方库 和自己写的工具 js](#libs--------------第三方库-和自己写的工具-js)
                - [browser.js       内置判断设备 js 如不喜欢 可删除](#browserjs-------内置判断设备-js-如不喜欢-可删除)
                - [helper.js        项目工具函数 内置 基本的 `getJson` 和 `postJson` 两个方法](#helperjs--------项目工具函数-内置-基本的-getjson-和-postjson-两个方法)
                - [params.js        转换请求参数格式](#paramsjs--------转换请求参数格式)
                - [routes.js        项目的路由配置文件](#routesjs--------项目的路由配置文件)
            - [styles            项目公用样式](#styles------------项目公用样式)
                - [fonts.less       项目字体](#fontsless-------项目字体)
                - [mixin.less       项目 less 公用方法](#mixinless-------项目-less-公用方法)
                - [vars.less        项目 less 变量定义](#varsless--------项目-less-变量定义)
            - [store.js          项目的 全局 store](#storejs----------项目的-全局-store)
        - [index.html         项目模板 html](#indexhtml---------项目模板-html)
        - [index.js           入口文件](#indexjs-----------入口文件)
        - [reducers.js        所有的 reducers](#reducersjs--------所有的-reducers)
        - [style.less         基础的 css 设置](#styleless---------基础的-css-设置)
    - [.babelrc            babel 插件配置](#babelrc------------babel-插件配置)
    - [.gitgnore           git 忽略文件配置](#gitgnore-----------git-忽略文件配置)
    - [cacheTemp.tpl       缓存模板   请看 `webpack.config.js` 这里用到了自己写的一个 模板生成插件 如不喜欢 可去除](#cachetemptpl-------缓存模板---请看-webpackconfigjs-这里用到了自己写的一个-模板生成插件-如不喜欢-可去除)
    - [LICENTSE            项目开源协议](#licentse------------项目开源协议)
    - [package.json        包依赖](#packagejson--------包依赖)
    - [postcss.config.js   postcss 配置](#postcssconfigjs---postcss-配置)
    - [README.md](#readmemd)
    - [webpack.config.js   webpack配置文件](#webpackconfigjs---webpack配置文件)
    - [yarn.lock           yarn 锁文件](#yarnlock-----------yarn-锁文件)

<!-- /TOC -->

