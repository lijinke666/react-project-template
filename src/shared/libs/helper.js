const helper = {
  host:"http://192.168.35.98",
  port:"6666",
  async getJson(url) {
    return await fetch(url)
  },
  async postJson(url){
    return await fetch(url,{
      method:"POST",
      mode: "no-cors",
      headers: { "Content-type": "application/json;charset=UTF-8" }
    })
  }
}
export default helper