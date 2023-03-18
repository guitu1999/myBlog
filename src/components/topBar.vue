<template>
    <div style="position: relative;">
        <div class="barBox">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1"> 首 页 </el-menu-item>
                <el-menu-item index="1">博客列表</el-menu-item>
                <el-menu-item index="1">发布博客</el-menu-item>
                <el-menu-item index="1">个人中心</el-menu-item>
            </el-menu>
        </div>
        <div class="login">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <i class=" iconfont icon-jiandan "></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>留言</el-dropdown-item>
                    <el-dropdown-item>退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.el-menu {
    background-color: transparent;
}



.barBox {
    width: 370px;
    margin: 0 auto;
    margin-bottom: 10px;

}

.login {
    position: absolute;
    top: 10px;
    right: 30px;
    color: #fff;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #000;
    opacity: 0.3;

}

.login:hover {
    opacity: 0.7;

}

.login .iconfont {
    font-size: 30px;
}

.el-menu--horizontal>.el-menu-item {
    color: #fff;
}
</style>