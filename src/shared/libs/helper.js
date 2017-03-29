const helper = {
  host:"http://localhost",
  port:"8000",
  async getJson(url) {
    return await fetch(url)
  },
  async postJson(url){
    let data = (await fetch(url,{
      method:"POST",
      mode: "cors",
      headers: { //自动添加
        // 'Content-Type': 'application/json; charset=utf-8'
      }
    })).json();
    return data;
  }
}
export default helper