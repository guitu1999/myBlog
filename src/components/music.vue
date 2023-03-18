<template>
    <div class="musicbox">
        <!-- 左侧音乐图片 -->
        <div class="left">
            <i class="iconfont icon-zanting"></i>
            <el-image class="img" fit="cover" :src="imgObj.picUrl"></el-image>
        </div>
        <!-- 右侧切换 -->
        <div class="right">
            <!-- 上一首 -->
            <div class="up">
                <i class="iconfont icon-shangyishou"></i>
            </div>
            <!-- 信息 -->
            <div class="info">
                <div style="font-size: 16px;color: #aaa;">{{ imgObj.name }}</div>
                <div style="color: #666;">{{ imgObj.song.artists[0].name }}</div>
            </div>
            <!-- 下一首 -->
            <div class="next">
                <i class="iconfont icon-xiayishou"></i>

            </div>
        </div>
        <audio ref="audio" preload="true" :src="`https://music.163.com/song/media/outer/url?id=${imgObj.id}.mp3`"></audio>
    </div>
</template>

<script>
// import axios from 'axios'
import { newMusic, MusicSrc } from '@/api/music'
export default {
    data() {
        return {
            imgList: [],
            imgObj: {},
            imgSrc: require('../assets/logo.jpeg')
        }
    },
    created() {
        this.getMusic()
    },
    methods: {
        async getMusic() {
            try {
                let data = await newMusic()
                console.log('打印歌曲', data);
                this.imgList = data.data.result
                this.imgObj = data.data.result[0]
                console.log('打印这个id', this.imgObj.id);
                this.getUrl(this.imgObj.id)

                // this.$refs.audio.play() // 调用audio标签的内置方法play可以继续播放声音
            } catch (err) {
                console.log('出错了', err);
            }
        },
        async getUrl(id) {
            let res = await MusicSrc(id)
            console.log('打印res', res);
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