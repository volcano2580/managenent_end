import axios from 'axios';
import Message from 'element-ui';
// axios.defaults.baseURL = 'http://webapi.test.sheysoftware.cn'
axios.defaults.baseURL = 'http://webapi.test.sheysoftware.cn';
axios.defaults.headers.ContentType = 'application/x-www-form-urlencoded';

// const token = localStorage.getItem('token');

let qs = require('qs');
// 请求拦截

axios.interceptors.request.use(config => {

  let data = config.data; // 拦截到的参数
  console.log(data + 'data');
  let params = ({
    AppTerminal: "pc",
    AppParam: JSON.stringify(data.AppParam),
    AppSign: '',
    AppEcrypt: "none",
    AppTimeStamp: "",
  })
  console.log(params + 'params');
  config.data = {
    params: qs.stringify(params)
  }
  
  
  return config;
}, err => {
  Message.error(err);
  return Promise.reject(err);
})


// 响应拦截





export default axios;