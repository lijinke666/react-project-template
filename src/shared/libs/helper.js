const helper = {
  host:"http://localhost",
  port:"8000",
  async getJson(url) {
    return await (fetch(url)).json()
  },
  async postJson(url,data){
    return (await fetch(url,{
      method:"POST",
      mode: "cors",
      headers: { //自动添加
        // 'Content-Type': 'application/json; charset=utf-8'
      },
      body: (data ? JSON.stringify(data) : null)
    })).json();
  }
}
export default helper