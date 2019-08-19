import React from "react";
import ReactDOM from "react-dom";
import { ConfigProvider } from "antd";
import zhCN from "antd/lib/locale-provider/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";

import App from "app";
import "normalize.css";
import "./style.less";

moment.locale("zh-cn");

const render = Component => {
  ReactDOM.render(
    <ConfigProvider locale={zhCN}>
      <Component />
    </ConfigProvider>,
    document.getElementById("root")
  );
};

const isNeedPolyfills = () =>
  "fetch" in window &&
  "Intl" in window &&
  "URL" in window &&
  "Map" in window &&
  "forEach" in NodeList.prototype &&
  "startsWith" in String.prototype &&
  "endsWith" in String.prototype &&
  "includes" in String.prototype &&
  "includes" in Array.prototype &&
  "assign" in Object &&
  "entries" in Object &&
  "keys" in Object;

if (!isNeedPolyfills()) {
  render(App);
} else {
  import("./polyfills").then(() => {
    render(App);
  });
}
