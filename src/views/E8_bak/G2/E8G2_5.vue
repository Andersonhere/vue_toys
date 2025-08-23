<template>
    <div id="app" @mousemove="handleMouseMove" @mouseup="handleMouseUp" @touchmove="handleMouseMove"
        @touchend="handleMouseUp">
        <div class="image-container">

            <div class="link-container">
                <router-link to="/">
                    <img src="../../../assets/返回主页.png" />
                </router-link>
            </div>

            <div class="question-container" style="background: white; padding: 20px;">
                <h2 style="margin-bottom: 30px; text-align: center;">
                    现在玩具有了新积木，我们来看看你能不能用刚才学到的秘密来猜猜，哪些新积木会让玩具发出音乐？这里有几个新积木组合，你可以选一个或多个你觉得能让玩具发出音乐的组合。
                </h2>

                <!-- 主要修改点：增加flex容器宽度和居中属性 -->
                <div class="options" style="
    display: flex; 
    gap: 40px;
    justify-content: center;  /* 新增居中属性 */
    width: 100%;              /* 确保容器宽度撑满 */
    padding: 0 20px;          /* 防止边缘挤压 */
  ">
                    <!-- 选项A -->
                    <div class="option" style=" border: 2px solid #ccc;   padding: 15px; min-width: 200px; text-align: center;     /* 内部元素居中 */ ">
                        <div class="blocks" style="  display: flex;  gap: 10px; justify-content: center;  /* 图片居中 */ ">
                            <img src="../../../assets/0606/E3E8H橘色三角形.png" alt="黄色网格方块"
                                style="width: 80px; height: 80px;" />
                            <img src="../../../assets/0606/E3E8H橘色三角形.png" alt="黄色网格三角" style="width: 80px; height: 80px;" />
                        </div>
                        <div style="text-align: center; margin-top: 10px;">A</div>
                    </div>

                    <!-- 选项B 保持相同结构 -->
                    <div class="option"
                        style="border: 2px solid #ccc; padding: 15px; min-width: 200px; text-align: center;">
                        <div class="blocks" style="display: flex; gap: 10px; justify-content: center;">
                            <img src="../../../assets/0606/E3E8H红矩形.png" alt="黄色网格方块" style="width: 80px; height: 80px;" />
                            <img src="../../../assets/0606/E2E8H草绿三角形.png" alt="绿色实心方块"
                                style="width: 80px; height: 80px;" />
                        </div>
                        <div style="text-align: center; margin-top: 10px;">B</div>
                    </div>

                    <!-- 选项C 保持相同结构 -->
                    <div class="option"
                        style="border: 2px solid #ccc; padding: 15px; min-width: 200px; text-align: center;">
                        <div class="blocks" style="display: flex; gap: 10px; justify-content: center;">
                            <img src="../../../assets/0606/E8H蓝梯形.png" alt="绿色网格方块"
                                style="width: 80px; height: 80px;" />
                            <img src="../../../assets/0606/E8H亮黄梯形.png" alt="黄色网格三角"
                                style="width: 80px; height: 80px;" />
                        </div>
                        <div style="text-align: center; margin-top: 10px;">C</div>
                    </div>
                    <!-- 选项D 保持相同结构 -->
                    <div class="option"
                        style="border: 2px solid #ccc; padding: 15px; min-width: 200px; text-align: center;">
                        <div class="blocks" style="display: flex; gap: 10px; justify-content: center;">
                            <img src="../../../assets/0606/E8H紫矩形.png" alt="绿色网格方块"
                                style="width: 80px; height: 80px;" />
                            <img src="../../../assets/0606/E8H紫矩形.png" alt="黄色网格三角"
                                style="width: 80px; height: 80px;" />
                        </div>
                        <div style="text-align: center; margin-top: 10px;">D</div>
                    </div>
                </div>
            </div>
        </div>
        <audio ref="audio" src="../../../music/Claudio The Worm.mp3"></audio>
    </div>
</template>

<script>
export default {
    name: 'E3G1',
    data() {
        return {
            imageList1: [
                // { src: require('../../../assets/小-黄-三角形.png'), x: 350, y: 150, alt: 's' },
                // { src: require('../../../assets/小-黄-矩形.png'), x: 500, y: 150, alt: 'j' },
                // { src: require('../../../assets/小-绿-三角形.png'), x: 950, y: 150, alt: 's' },
                // { src: require('../../../assets/小-绿-矩形.png'), x: 1100, y: 150, alt: 'j' },
            ],
            draggingIndex: null,
            activeListType: null,  // 当前拖动的列表类型
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
        handleMouseDown(event, index, listType) {
            this.draggingIndex = index;
            this.activeListType = listType;
            console.log('Switch imgListalt:', event.alt);
            const clientX = event.touches ? event.touches[0].clientX : event.clientX;
            const clientY = event.touches ? event.touches[0].clientY : event.clientY;
            if (this.draggingIndex !== null) {
                const currentList = this.activeListType === 'original'
                    ? this.imageList
                    : this.imageList1;
                this.offsetX = clientX - currentList[index].x;
                this.offsetY = clientY - currentList[index].y;
            }

            event.preventDefault();
        },
        handleMouseMove(event) {
            if (this.draggingIndex !== null) {
                const index = this.draggingIndex;
                const clientX = event.touches ? event.touches[0].clientX : event.clientX;
                const clientY = event.touches ? event.touches[0].clientY : event.clientY;
                requestAnimationFrame(() => {
                    if (this.draggingIndex !== null) {
                        const currentList = this.activeListType === 'original'
                            ? this.imageList
                            : this.imageList1;
                        currentList[index].x = clientX - this.offsetX;
                        currentList[index].y = clientY - this.offsetY;
                    }
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
                    imgRect.bottom > dropArea.top - 20 &&
                    imgRect.bottom < dropArea.top + 30
                ) {
                    // if (count >= 2) {
                    //     return;
                    // }
                    this.imageList_alt[count] = imgRect.alt;
                    count++;
                }
            });

            this.imageList1.forEach((img) => {
                const imgRect = {
                    left: img.x,
                    top: img.y,
                    right: img.x + 50, // 图片宽度
                    bottom: img.y + 50, // 图片高度
                    alt: img.alt,
                };
                // 检查重叠
                if (
                    imgRect.left < dropArea.right &&
                    imgRect.right > dropArea.left &&
                    imgRect.top < dropArea.bottom &&
                    imgRect.bottom > dropArea.top - 20 &&
                    imgRect.bottom < dropArea.top + 30
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
    /* 水平居中 */
    align-items: flex-end;
    /* 靠下对齐 */
    height: 90vh;
    padding-left: 15%;
    /* 右侧空白的宽度 */
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
    padding-right: 50px;
    /* 右侧空白的宽度 */
}

.draggable-image1 {
    width: 50px;
    /* 设置图片宽度 */
    height: 50px;
    /* 设置图片高度 */
    cursor: grab;
    z-index: 2;
    /* 确保图片在上方 */
    padding-right: 50px;
    /* 右侧空白的宽度 */
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
    background-size: contain;
    background-position: center;
    width: 345px;
    /* 根据计算结果设置宽度 */
    height: 150px;
    /* 目标高度 */
    /* 设置区域高度 */
    background-image: url('../../../assets/toy1_color rule.png');
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
    background-image: url('../../../assets/电线.png');
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
    background-image: url('../../../assets/开关-灰色.png');
    background-size: cover;
    border-radius: 50%;
    background-size: cover;
    transition: background-image 0.3s;
}

button.on {
    background-image: url('../../../assets/开关蓝色.jpg');
}

@media (max-width: 1200px) {
    .draggable-image {
        width: 100px;
        height: 100px;
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