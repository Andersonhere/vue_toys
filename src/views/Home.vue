<template>
    <div>
        <div class="link-container">
            <h1 class="title">Home Page</h1>
            <router-link to="/test" class="large-link">Go to 练习: game0</router-link>
            <router-link to="/E1G1_1" class="large-link">Go to Experiment I : game 1 color</router-link>
            <router-link to="/E1G2_1" class="large-link">Go to Experiment I : game 2 shape</router-link>
            <router-link to="/E2G1" class="large-link">Go to Experiment II : game 1 color</router-link>
            <router-link to="/E2G2" class="large-link">Go to Experiment II : game 2 shape</router-link>
            <router-link to="/E3G1" class="large-link">Go to Experiment III : game 1 shape</router-link>
            <router-link to="/E3G2" class="large-link">Go to Experiment III : game 2 color</router-link>
            <router-link to="/E3G3" class="large-link">Go to Experiment III : game 3 size</router-link>
            <router-link to="/E4G1" class="large-link">Go to Experiment IV : game 1 color</router-link>
            <router-link to="/E4G2" class="large-link">Go to Experiment IV : game 2 shape</router-link>

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
.large-link {
  font-size: 30px;
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