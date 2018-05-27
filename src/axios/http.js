import axios from 'axios'

const httpServer = (opts, data) => {

  // 公共参数
  let Public = {};

  //  发送的数据初始化
  function sendData (obj) {
    for (let key in obj) {
      if (obj[key] === '') {
        delete obj[key]
      }
    }
    return obj || {}
  }

  let httpDefaultOpts = {
//   http默认配置
    method: opts.method,
    baseURL: 'http://172.20.10.9:8080',
    url: opts.url,
    header: {},
    timeout: 10000,
    params: Object.assign(Public, sendData(data)),
    data: Object.assign(Public, data),
  };
  if (opts.method === 'get') {
    delete httpDefaultOpts.data
  } else {
    delete httpDefaultOpts.params
  }
  let promise = new Promise(function (resolve, reject) {
    axios(httpDefaultOpts).then(
      (res) => {
        resolve(res)
      }
    ).catch(
      (response) => {
        reject(response)
      }
    )
  })
  return promise
}
export default httpServer
