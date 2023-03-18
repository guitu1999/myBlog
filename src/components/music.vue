<template>
    <div class="musicbox">
        <audio ref="audio" preload="true" :src="`https://music.163.com/song/media/outer/url?id=${id}.mp3`"></audio>
        <!-- 左侧音乐图片 -->
        <div class="left">
            <i v-if="is_play" class="iconfont icon-zanting" @click="playMusic"></i>
            <i v-else class="iconfont icon-weibiaoti-" @click="playMusic"></i>
            <el-image class="img" fit="cover" :src="imgObj.picUrl"></el-image>
        </div>
        <!-- 右侧切换 -->
        <div class="right">
            <!-- 上一首 -->
            <div class="up" @click="up_music">
                <i class="iconfont icon-shangyishou"></i>
            </div>
            <!-- 信息 -->
            <div class="info">
                <div style="font-size: 16px;color: #aaa;">{{ imgObj.name }}</div>
                <div style="color: #666;">{{ imgObj.song.artists[0].name }}</div>
            </div>
            <!-- 下一首 -->
            <div class="next" @click="next_music">
                <i class="iconfont icon-xiayishou"></i>

            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { newMusic } from '@/api/music'
export default {
    data() {
        return {
            imgList: [],
            imgObj: {},
            is_play: false,//是否播放
            now_index: 0,//当前的播放歌曲索引
            id: '',//歌曲id
        }
    },
    mounted() {
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
                this.id = data.data.result[0].id
                this.getUrl(this.imgObj.id)

            } catch (err) {
                console.log('出错了', err);
            }
        },
        async getUrl(id) {
            try {
                let res = await axios({
                    url: `https://autumnfish.cn/song/detail?ids=${id}`,
                    method: 'GET'
                })

                console.log('打印res11', res)
                console.log('this.$refs.audio', this.$refs.audio);

            } catch (err) {
                console.log('错误', err);
            }
        },
        //播放音乐
        playMusic() {
            if (this.is_play) {
                console.log('去暂停');
                this.$refs.audio.pause()
            } else {
                console.log('去播放');
                this.$refs.audio.play()
            }
            this.is_play = !this.is_play
        },
        //下一首音乐
        next_music() {
            this.now_index++
            if (this.now_index >= 9) {
                this.now_index = 0
            }
            this.id = this.imgList[this.now_index].id
            this.imgObj = this.imgList[this.now_index]
            this.is_play = false
            setTimeout(() => {
                this.playMusic()
            }, 0);
            console.log('点几了下一首', this.id);
            console.log('this.$refs.audio', this.$refs.audio);
        },
        //上一首音乐
        up_music() {
            this.now_index--
            if (this.now_index <= 0) {
                this.now_index = 9
            }
            this.id = this.imgList[this.now_index].id
            this.imgObj = this.imgList[this.now_index]
            this.is_play = false
            setTimeout(() => {
                this.playMusic()
            }, 0);
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
    /* width: 30px; */
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