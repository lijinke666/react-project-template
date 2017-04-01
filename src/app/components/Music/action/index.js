import helper from "libs/helper"
const { host, port } = helper;

const GET_MUSIC_DATA = "getMusicData"

export function getMusicData(){
  return async function(dispatch){       //组件redux 绑定映射dispatch过来
    let data = await helper.postJson(`${host}:${port}/music`)
    //发送action到reducer
    setTimeout(()=>{     //模拟一个网络延迟的情况
      dispatch({
        type: GET_MUSIC_DATA,
        musicData: data
      })
    },1000)

  }
}