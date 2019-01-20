import axios from 'axios';
import Message from 'element-ui';
axios.defaults.baseURL = 'http://webapi.test.sheysoftware.cn'

// 请求拦截
axios.interceptors.requests.use( config => {
    config.headers = {'Content-Type':'application/x-www-form-urlencoded'};
    return config;
}, err => {
    Message.error(err);
    return Promise.reject(err);
})


// 响应拦截
