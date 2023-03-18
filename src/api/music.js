import request from '@/utils/request'

//获取每日新音乐
export const newMusic = () => request({
    url: '/api/personalized/newsong',
    method: 'GET'
})

//获取音乐地址 1217823
export const MusicSrc = (id) => request({
    url: `/music/song/detail?ids=${id}`,
    method: 'GET',
})



