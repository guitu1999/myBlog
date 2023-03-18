<template>
    <div class="login_box">
        <!-- 登录框 -->
        <div class="loginIpt">
            <!-- 头部logo -->
            <img class="logoBox" src="../../assets/logo.jpeg" alt="">
            <!-- 文字 -->
            <div class="txt">追风の博客</div>
            <!-- 输入框 -->
            <div class="ipt_box">
                <i class="iconfont icon-chengzi"></i>
                <input v-model="form.username" type="text" placeholder="请输入账号名称">
            </div>
            <div class="ipt_box">
                <i class="iconfont icon-li"></i>
                <input v-model="form.password" type="text" placeholder="请输入登录密码">
            </div>
            <!-- 登录按钮 -->
            <div class="btnBox">
                <button @click="toLogin">登录</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            form: {
                username: '',//账号
                password: '',//密码
            }
        }
    },
    mounted() {

    },
    methods: {
        //登录按钮
        toLogin() {
            console.log('点击了登录');
            this.$router.push('/home')
        }
    }
}
</script>

<style scoped >
* {
    margin: 0;
    padding: 0;
}


.login_box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-image: url('~@/assets/bgc.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
}

/* 登录框 */
.loginIpt {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
    height: 400px;
    padding: 20px 10px;
    border-radius: 10px;
    box-shadow: inset 0 0 0 3000px rgba(255, 255, 255, 0.3);
    filter: blur(0.3px);
}

/* 头部logo */
.loginIpt .logoBox {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-top: 35px;
}

.txt {
    font-size: 20px;
    margin-top: 5px;
}

/* 输入框区域 */
.ipt_box {
    position: relative;
    margin-top: 40px;
    width: 280px;
    height: 35px;
    line-height: 35px;
}

.iconfont {
    position: absolute;
    top: 0;
    left: 10px;
    font-size: 20px;
}

.ipt_box input {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background-color: transparent;
    border: 2px solid;
    border-image-source: linear-gradient(to right, #8f41e9, #578aef);
    border-image-slice: 1;
    color: black;
    padding-left: 30px;
}

/* 取消点击input边框 */
input:focus {
    outline: none;
}

/* 提示文字的位置 */
input::-webkit-input-placeholder {
    position: relative;
    left: 5px
}

.btnBox {
    margin-top: 40px;
    width: 280px;
    height: 50px;
    line-height: 50px;
}

.btnBox button {
    width: 100%;
    height: 100%;
    border-radius: 2500px;
    background-color: transparent;
    border: 2px solid #578aef;
    font-size: 25px;
    color: #578aef;
}

/* .ipt_box input:last-child {
    margin-top: 30px;
} */
</style>