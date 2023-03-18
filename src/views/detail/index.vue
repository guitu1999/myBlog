<template>
    <div>
        详情页
    </div>
</template>

<script>
import { getBlog } from '@/api/blog'
import axios from 'axios'
export default {
    created() {
        this.getAllBlog()
    },
    methods: {
        //获取博客列表
        async getAllBlog() {
            axios({
                url: 'https://487z3422t2.goho.co/admin/blog/list',
                method: 'POST'
            })
            // console.log('111');
            // try {
            //     let data = await getBlog()
            //     console.log('data', data);
            // } catch (err) {
            //     console.log('错误', err);
            // }
        }
    }
}
</script>

<style scoped></style>