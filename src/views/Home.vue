<template>
    <div>
        <div class="link-container">
            <h1 class="title">Home Page</h1>
            <router-link to="/first">
                <img src="../assets/link/first.png" alt="Go to First" />
            </router-link>
            <router-link to="/second">
                <img src="../assets/link/second.png" alt="Go to Second" />
            </router-link>
            <router-link to="/third">
                <img src="../assets/link/third.png" alt="Go to Third" />
            </router-link>
            <router-link to="/four">
                <img src="../assets/link/four.png" alt="Go to Four" />
            </router-link>
            <router-link to="/five">
                <img src="../assets/link/five.png" alt="Go to Five" />
            </router-link>
            <router-link to="/six">
                <img src="../assets/link/six.png" alt="Go to About" />
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    /* 竖向排列 */
    align-items: center;
    /* 水平居中 */
    justify-content: center;
    /* 垂直居中 */
    height: 100vh;
    /* 视口高度 */
}

.title {
    margin-bottom: 100px;
    /* 标题与链接之间的间隔 */
}

.link-container {
    display: flex;
    flex-direction: column;
    /* 竖向排列 */
    align-items: center;
    /* 垂直居中对齐 */
}

.link-container img {
    margin: 10px 0;
    /* 每个链接之间的间隔 */
    width: 200px;
    /* 根据需要设置图片宽度 */
    height: auto;
    /* 高度自适应 */
    cursor: pointer;
    /* 鼠标悬停时变为指针 */
    border: 2px solid #ccc;
    /* 边框样式 */
    border-radius: 5px;
    /* 圆角边框 */
    padding: 5px;
    /* 内边距，增加边框的视觉效果 */
}
</style>