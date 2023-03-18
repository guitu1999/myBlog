<template>
    <div class="musicbox">
        <!-- 左侧音乐图片 -->
        <div class="left">
            <i class="iconfont icon-zanting"></i>
            <el-image class="img" fit="cover" :src="imgSrc"></el-image>
        </div>
        <!-- 右侧切换 -->
        <div class="right">
            <!-- 上一首 -->
            <div class="up">
                <i class="iconfont icon-shangyishou"></i>
            </div>
            <!-- 信息 -->
            <div class="info">
                <div style="font-size: 24px;color: #aaa;">醒着醉</div>
                <div style="color: #666;">马良</div>
            </div>
            <!-- 下一首 -->
            <div class="next">
                <i class="iconfont icon-xiayishou"></i>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imgSrc: require('../assets/logo.jpeg')
        }
    }
}
</script>

<style scoped>
.musicbox {
    box-sizing: border-box;
    width: 500px;
    height: 80px;
    border-radius: 2500px;
    border: 1px solid #000;
    padding: 10px 50px;
    display: flex;
}

.left {
    width: 60px;
    height: 60px;
    position: relative;
}

.left .iconfont {
    position: absolute;
    width: 30px;
    height: 30px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 22;
    font-size: 30px;
    opacity: .3;
}

.left .iconfont:hover {
    opacity: .8;
}

/deep/.left img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
}

.right {
    margin-left: 50px;
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.right .iconfont {
    font-size: 40px;
}

.right .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>