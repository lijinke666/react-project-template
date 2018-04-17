import React from "React"
import { Link } from 'react-router-dom'
import {Alert} from "antd"
import history from "libs/history"
import "./styles.less"

const NotFound = ()=> (
    <Alert
      message="404"
      description={
          <>
          <p>页面去火星了,暂时失联了.</p>
          <p>
            <a onClick={()=>history.go(-1)}>回到上一级</a>
            <span className="space"></span>
            <Link to="/">回到首页</Link>
          </p>
          </>
        }
      type="info"
      showIcon
    />
)

export default NotFound