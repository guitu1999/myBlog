<template>
    <div class="box">
        <TopBar></TopBar>
        <!-- 轮播图 -->
        <el-carousel class="swpbox" :interval="5000" type="card" arrow="always">
            <el-carousel-item v-for="(item, index) in swiList" :key="index">
                <div class="text">{{ item.txt }}</div>

                <el-image class="swpimg" :src="item.src" alt="">
                </el-image>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
import TopBar from '../../components/topBar.vue'
export default {
    components: {
        TopBar
    },
    data() {
        return {
            activeIndex: '1',
            swiList: [
                {
                    src: require('../../assets/swiper1.jpeg'),
                    txt: '不见陡崖，难寻瀑布'
                },
                {
                    src: require('../../assets/swiper2.jpeg'),
                    txt: '没有礁石，何来浪花'
                },
                {
                    src: require('../../assets/swiper3.jpeg'),
                    txt: '会者定离，一期一祈'

                }
            ]
        }
    },
    methods: {
        handleSelect() {

        }
    }
}
</script>

<style scoped>
.box {
    box-sizing: border-box;
    width: 100%;
    min-height: 100vh;
    background-image: url(../../assets/home.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 10px;
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}

.swpbox {
    position: relative;
}

.swpbox .text {
    position: absolute;
    top: 20%;
    left: 50%;
    z-index: 222;
    transform: translateX(-50%);
    font-size: 25px;
}
</style>