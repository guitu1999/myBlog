
//引入 axios
import axios from 'axios'
//创建axios 实例
const service = axios.create({
    baseURL: '#',//基础地址
    timeout: 5000,//超时时间
})
//请求拦截器
service.interceptors.request.use()
//响应拦截器
service.interceptors.response.use({

})
//导出
export default service