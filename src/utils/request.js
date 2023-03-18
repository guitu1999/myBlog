
//引入 axios
import axios from 'axios'
//创建axios 实例

const service = axios.create({
    // baseURL: "/",//基础地址
    timeout: 5000,//超时时间
})
//请求拦截器
service.interceptors.request.use()
//响应拦截器
service.interceptors.response.use(
    (response) => {
        console.log('接口请求成功', response);
        return response
        // if (response.data.code === 200) {
        //     return response.data.result
        // } else {
        //     return Promise.reject(new Error('接口出错了'))
        // }
    },
    (error) => {
        console.log('接口请求失败', error);
        return error
    }
)
//导出
export default service