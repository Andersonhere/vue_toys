<template>
    <div>
        <div class="link-container">
            <h1 class="title">Home Page</h1>
            <router-link to="/first">Go to 实验一：game1</router-link>
            <router-link to="/third">Go to 实验一：game2</router-link>
            <router-link to="/five">Go to 实验二：game1</router-link>
            <router-link to="/six">Go to 实验二：game2</router-link>
            <router-link to="/seven">Go to 实验二：game3</router-link>

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