<template>
    <div id="app" @mousemove="handleMouseMove" @mouseup="handleMouseUp" @touchmove="handleMouseMove"
        @touchend="handleMouseUp">
        <div class="image-container">

            <div class="link-container">
                <router-link to="/second">
                    <img src="../assets/下一页.png" />
                </router-link>
            </div>

            <img v-for="(img, index) in imageList" :key="index" :src="img.src" :alt="img.alt" class="draggable-image"
                :style="{ left: img.x + 'px', top: img.y + 'px', position: 'absolute'}"
                @mousedown="handleMouseDown($event, index)" @touchstart="handleMouseDown($event, index)" />
            <div class="wrapper">
                <div class="container">
                    <div class="box button_container">
                        <button :class="{ 'on': isOn }" @click="toggleSwitch($event)"
                            @touchstart="toggleSwitch($event)"></button>
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
                { src: require('../assets/蓝色三角形.png'), x: 50, y: 100, alt: 'b' },
                { src: require('../assets/蓝色三角形.png'), x: 200, y: 100, alt: 'b' },
                { src: require('../assets/黄色矩形.png'), x: 350, y: 100, alt: 'y' },
                { src: require('../assets/蓝色矩形.png'), x: 500, y: 100, alt: 'y' },
                { src: require('../assets/黄色三角形.png'), x: 650, y: 100, alt: 'r' },
                { src: require('../assets/黄色三角形.png'), x: 800, y: 100, alt: 'r' },
                { src: require('../assets/蓝色圆形.png'), x: 950, y: 100, alt: 'r' },
                { src: require('../assets/黄色圆形.png'), x: 1100, y: 100, alt: 'r' },
            ],
            draggingIndex: null,
            offsetX: 0,
            offsetY: 0,
            isOn: false,
            isbegin: true,
            imageList_alt: [],
        };
    },
    methods: {
        toggleSwitch(event) {
            this.isOn = !this.isOn;
            if (!this.isOn) {
                this.$refs.audio.pause();
                this.$refs.audio.currentTime = 0; // 可选：将音频播放时间重置为0
            } else {
                this.checkDropArea(); // 检查图片是否在区域内
            }
            if (this.isbegin) {
                setTimeout(() => {
                    this.$refs.audio.pause();
                    this.$refs.audio.currentTime = 0; // 可选：将音频播放时间重置为0
                }, 100);
                this.$refs.audio.play();
                this.isbegin = false;
            }
            console.log('Switch toggled:', this.isOn);
            event.preventDefault()
        },
        handleMouseDown(event, index) {
            this.draggingIndex = index;
            const clientX = event.touches ? event.touches[0].clientX : event.clientX;
            const clientY = event.touches ? event.touches[0].clientY : event.clientY;
            this.offsetX = clientX - this.imageList[index].x;
            this.offsetY = clientY - this.imageList[index].y;
            event.preventDefault();
        },
        handleMouseMove(event) {
            if (this.draggingIndex !== null) {
                const index = this.draggingIndex;
                const clientX = event.touches ? event.touches[0].clientX : event.clientX;
                const clientY = event.touches ? event.touches[0].clientY : event.clientY;
                requestAnimationFrame(() => {
                    this.imageList[index].x = clientX - this.offsetX;
                    this.imageList[index].y = clientY - this.offsetY;
                });
                this.checkDropArea();
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
                    // if (count >= 2) {
                    //     return;
                    // }
                    this.imageList_alt[count] = imgRect.alt;
                    count++;
                }
            });

            // 如果有两个图片在区域内，播放音频
            if (count == 2 && this.imageList_alt[0] == this.imageList_alt[1]) {
                //document.getElementById('audio').play();
                this.$refs.audio.play();
                //document.querySelector('audio').play();
                // console.log('弹出提示的可见性变化: on', this.imageList_alt[0], this.imageList_alt[1]);
            } else {
                this.$refs.audio.pause();
                this.$refs.audio.currentTime = 0; // 可选：将音频播放时间重置为0
                // console.log('弹出提示的可见性变化: false', );
            }
        },
        iosplay() {
            if (window.navigator.userAgent.match(/(iPod|iPhoneliPad)/)) {
                this.$refs.audioPlayer.play();
                console.log("wwe");
            }
            console.log("342");
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
    height: 90vh;
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
    width: 400px;
    /* 设置区域宽度 */
    height: 150px;
    /* 设置区域高度 */
    background-image: url('../assets/玩具1.png');
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

@media (max-width: 1200px) {
    .draggable-image {
        width: 80px;
        height: 80px;
    }

    .drop-area {
        width: 400px;
        height: 200px;
    }

    .button_container {
        width: 80px;
        height: 80px;
    }

    button {
        width: 80px;
        height: 80px;
    }

    .link-container img {
        width: 80px;
    }
}

</style>