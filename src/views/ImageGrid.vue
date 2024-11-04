<template>
    <div class="wrapper">
        <div class="container">
            
            <div class="box button_container">
                <button :class="{ 'on': isOn }" @click="toggleSwitch"></button>
            </div>
            <div class="box line-area" ref="line"></div>
            <div class="box drop-area" ref="dropArea"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ImageGrid'
}
</script>

<style scoped>
html,
body {
    margin: 0;
    height: 100%;
    overflow: hidden;
    /* 防止出现滚动条 */
    /* 使 body 高度为视口高度 */
}

.wrapper {
    display: flex;
    justify-content: center;
    /* 水平居中 */
    align-items: flex-end;
    /* 靠下对齐 */
    height: 100vh;
    /* 使 wrapper 高度为视口高度 */

    /* 使 wrapper 高度为视口高度 */
}

.container {
    display: flex;
    align-items: flex-end;
    /* 使用 Flexbox */
}

.box {
    width: 200px;
    /* 固定宽度 */
    height: 200px;
    /* 固定高度 */
    margin: 0 -2px;
    /* 左右间距 */
    background-size: contain;
    /* 背景图片覆盖 */
    background-position: center;
    /* 背景居中 */
}

.drop-area {
    width: 600px;
    /* 设置区域宽度 */
    height: 300px;
    /* 设置区域高度 */
    background-image: url('../assets/玩具-红色三角形.png');
    background-repeat: no-repeat;
    margin-bottom: 30px; /* 向下移动 */
    /* 可选：设置圆角 */
}

.line-area {
    background-size: contain;
    /* 背景图片缩放以适应区域 */
    background-repeat: no-repeat;
    /* 防止背景重复 */
    background-position: center;
    background-image: url('../assets/电线.png');
    /* 设置区域高度 */
}

.button_container {
    width: 100px;
    /* 固定宽度 */
    height: 100px;
    /* 背景图片缩放以适应区域 */
    /* 防止背景重复 */
    background-position: center;
    background-repeat: no-repeat;
    /* 居中 */
    z-index: 1;
    /* 确保 drop-area 在 upper-rectangle 上方 */
    margin-bottom: 30px; /* 向下移动 */
    /* 设置区域高度 */
}

button {
    width: 100px;
    /* 固定宽度 */
    height: 100px;
    /* 背景图片缩放以适应区域 */
    /* 防止背景重复 */
    background-position: center;
    background-repeat: no-repeat;
    /* 居中 */
    z-index: 1;
    border-radius: 50%;
    /* 确保 drop-area 在 upper-rectangle 上方 */
    margin-bottom: 30px; /* 向下移动 */
    background-size: cover;
    background-image: url('../assets/开关-灰色.png');
}

button.on {
    background-image: url('../assets/开关蓝色.jpg');
}
</style>