<template>
    <div id="app" @mousemove="handleMouseMove" @mouseup="handleMouseUp">
        <div class="image-container">
            <div class="link-container">
                <router-link to="/">Go to Home</router-link>
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
            <img v-for="(img, index) in imageList" :key="index" :src="img.src" :alt="img.alt" class="draggable-image"
                :style="{ left: img.x + 'px', top: img.y + 'px', position: 'absolute' }"
                @mousedown="handleMouseDown($event, index)" />

            <div class="wrapper">
                <div class="container">
                    <div class="box button_container">
                        <button :class="{ 'on': isOn }" @click="toggleSwitch"></button>
                    </div>
                    <div class="box line-area" ref="line"></div>
                    <div class="box drop-area" ref="dropArea"></div>
                </div>
            </div>

        </div>
        <audio ref="audio" src="../music/Claudio The Worm.mp3"></audio>
    </div>
</template>

<script>
export default {
    name: 'FirstPage',
    data() {
        return {
            imageList: [
                { src: require('../assets/积木-蓝色三角.png'), x: 100, y: 100, alt: 'b' },
                { src: require('../assets/积木-蓝色三角.png'), x: 300, y: 100, alt: 'b' },
                { src: require('../assets/积木-黄色三角.png'), x: 500, y: 100, alt: 'y' },
                { src: require('../assets/积木-黄色三角.png'), x: 700, y: 100, alt: 'y' },
                { src: require('../assets/积木-红色圆形.png'), x: 900, y: 100, alt: 'r' },
                { src: require('../assets/积木-红色圆形.png'), x: 1100, y: 100, alt: 'r' },
                { src: require('../assets/积木-红色矩形.png'), x: 1300, y: 100, alt: 'r' },
                { src: require('../assets/积木-红色矩形.png'), x: 1500, y: 100, alt: 'r' },
            ],
            draggingIndex: null,
            offsetX: 0,
            offsetY: 0,
            isOn: false,
            imageList_alt: [],
        };
    },
    methods: {
        toggleSwitch() {
            this.isOn = !this.isOn;
            if (!this.isOn) {
                this.$refs.audio.pause();
                this.$refs.audio.currentTime = 0; // 可选：将音频播放时间重置为0
            } else {
                this.checkDropArea(); // 检查图片是否在区域内
            }
        },
        handleMouseDown(event, index) {
            this.draggingIndex = index;
            this.offsetX = event.clientX - this.imageList[index].x;
            this.offsetY = event.clientY - this.imageList[index].y;

            // Prevent text selection during dragging
            event.preventDefault();
        },
        handleMouseMove(event) {
            if (this.draggingIndex !== null) {
                const index = this.draggingIndex;

                // 使用 requestAnimationFrame 来提高性能
                requestAnimationFrame(() => {
                    this.imageList[index].x = event.clientX - this.offsetX;
                    this.imageList[index].y = event.clientY - this.offsetY;
                });
                this.checkDropArea(); // 检查图片是否在区域内
            }
        },
        handleMouseUp() {
            this.draggingIndex = null;
        },
        checkDropArea() {
            if (!this.isOn) {
                return;
            }
            let count = 0;
            const dropArea = this.$refs.dropArea.getBoundingClientRect();
            // 检查每个图片是否在 dropArea 内
            this.imageList.forEach((img) => {
                const imgRect = {
                    left: img.x,
                    top: img.y,
                    right: img.x + 100, // 图片宽度
                    bottom: img.y + 100, // 图片高度
                    alt: img.alt,
                };
                // 检查重叠
                if (
                    imgRect.left < dropArea.right &&
                    imgRect.right > dropArea.left &&
                    imgRect.top < dropArea.bottom &&
                    imgRect.bottom > dropArea.top
                ) {
                    if (count >= 2) {
                        return;
                    }
                    this.imageList_alt[count] = imgRect.alt;
                    count++;
                }
            });

            // 如果有两个图片在区域内，播放音频
            if (count == 2 && this.imageList_alt[0] == this.imageList_alt[1]) {
                this.$refs.audio.play();
                // console.log('弹出提示的可见性变化: on', this.imageList_alt[0], this.imageList_alt[1]);
            } else {
                this.$refs.audio.pause();
                this.$refs.audio.currentTime = 0; // 可选：将音频播放时间重置为0
                // console.log('弹出提示的可见性变化: false', );
            }
        },
    },
};
</script>

<style scoped>
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

#app {
    text-align: center;
    position: relative;
    height: 100vh;
    /* 设定为全屏高度 */
}


.draggable-image {
    width: 100px;
    /* 设置图片宽度 */
    height: 100px;
    /* 设置图片高度 */
    cursor: grab;
    z-index: 2;
    /* 确保图片在上方 */
}



.controls {
    display: flex;
    justify-content: center;
    /* 水平居中 */
    margin-top: 10px;
    /* 增加顶部间距 */
    position: relative;
}


.link-container {
    position: fixed;
    /* 固定定位 */
    bottom: 20px;
    /* 距离底部20像素 */
    right: 20px;
    /* 距离右边20像素 */
    display: flex;
    flex-direction: column;
    /* 竖向排列 */
}

.link-container img {
    margin: 5px 0;
    /* 每个链接之间的间隔 */
    width: 50px;
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

.drop-area {
    width: 600px;
    /* 设置区域宽度 */
    height: 300px;
    /* 设置区域高度 */
    background-image: url('../assets/玩具-红色三角形.png');
    background-repeat: no-repeat;
    margin-bottom: 30px;
    /* 向下移动 */
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
    margin-bottom: 30px;
    /* 向下移动 */
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
    /* 确保 drop-area 在 upper-rectangle 上方 */
    margin-bottom: 30px;
    /* 向下移动 */
    background-image: url('../assets/开关-灰色.png');
    background-size: cover;
    border-radius: 50%;
    background-size: cover;
    transition: background-image 0.3s;
}

button.on {
    background-image: url('../assets/开关蓝色.jpg');
}
</style>