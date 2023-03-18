import request from '@/utils/request'

//获取博客列表
export const getBlog = () => request({
    url: '/glob/admin/blog/list',
    method: 'POST'
})