<template>
    <div id="app" @mousemove="handleMouseMove" @mouseup="handleMouseUp">
      <div class="image-container">
        <img
          v-for="(img, index) in imageList"
          :key="index"
          :src="img.src"
          class="draggable-image"
          :style="{ left: img.x + 'px', top: img.y + 'px', position: 'absolute' }"
          @mousedown="handleMouseDown($event, index)"
        />
        <div class="drop-area" ref="dropArea">
          <div class="upper-rectangle" ref="upperRectangle"></div>
        </div>
      </div>
      <div class="controls">
        <button class="play-button" @click="checkDropArea"></button>
      </div>
      <audio ref="audio" src="sound.mp3" preload="auto"></audio>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        imageList: [
          { src: './pic/red_cicle.png', x: 0, y: 0 }, // 替换为你的图片路径
          { src: './pic/red_cicle.png', x: 100, y: 100 }, // 替换为你的图片路径
        ],
        draggingIndex: null,
        offsetX: 0,
        offsetY: 0,
      };
    },
    methods: {
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
        }
      },
      handleMouseUp() {
        this.draggingIndex = null;
      },
      checkDropArea() {
        const upperRectangle = this.$refs.upperRectangle.getBoundingClientRect();
        let count = 0;
  
        // 检查每个图片是否在上半部分区域内
        this.imageList.forEach((img) => {
          const imgRect = {
            left: img.x,
            top: img.y,
            right: img.x + 100, // 图片宽度
            bottom: img.y + 100, // 图片高度
          };
  
          // 检查重叠
          if (
            imgRect.left < upperRectangle.right &&
            imgRect.right > upperRectangle.left &&
            imgRect.top < upperRectangle.bottom &&
            imgRect.bottom > upperRectangle.top
          ) {
            count++;
          }
        });
  
        // 如果有两个图片在区域内，播放音频
        if (count >= 2) {
          this.$refs.audio.play();
        } else {
          alert("请确保至少有两个图片在上半部分区域内。");
        }
      },
    },
  };
  </script>
  
  <style>
  #app {
    text-align: center;
    position: relative;
    height: 100vh; /* 设定为全屏高度 */
  }
  
  .image-container {
    position: relative;
    width: 100%;
    height: calc(100% - 60px); /* 确保空间给下方控件 */
  }
  
  .draggable-image {
    width: 100px; /* 设置图片宽度 */
    height: 100px; /* 设置图片高度 */
    cursor: grab;
    z-index: 2; /* 确保图片在上方 */
  }
  
  .drop-area {
    width: 600px; /* 设置区域宽度 */
    height: 300px; /* 设置区域高度 */
    background-image: url('./pic/机器-缺角图形.png'); /* 设置背景图片 */
    background-size: cover; /* 背景图片覆盖整个区域 */
    background-position: center; /* 背景图片居中 */
    border: 2px dashed red; /* 区域边框样式 */
    position: absolute;
    top: 50%; /* 居中 */
    left: 50%; /* 居中 */
    transform: translate(-50%, -50%); /* 居中 */
    z-index: 1; /* 确保 drop-area 在 upper-rectangle 上方 */
  }
  
  .upper-rectangle {
    width: 100%; /* 占用上半部分的宽度 */
    height: 50%; /* 占用上半部分的高度 */
    background-color: rgba(255, 255, 255, 0.5); /* 半透明背景色以便于可视化 */
    position: absolute;
    top: 0; /* 从顶部开始 */
    left: 0; /* 从左侧开始 */
    z-index: 0; /* 确保 upper-rectangle 在最底层 */
  }
  
  .controls {
    display: flex;
    justify-content: center; /* 水平居中 */
    margin-top: 10px; /* 增加顶部间距 */
  }
  
  .play-button {
  padding: 10px 20px; /* 按钮内边距 */
  font-size: 16px; /* 字体大小 */
  cursor: pointer; /* 鼠标指针样式 */
  background-image: url('./pic/turn_off_on.jpg'); /* 按钮背景图片 */
  background-size: cover; /* 背景图片覆盖 */
  color: white; /* 字体颜色 */
  border: none; /* 去掉默认边框 */
  border-radius: 5px; /* 边角圆润 */
  position: absolute; /* 绝对定位以便自定义位置 */
  width: 50px; /* 设置区域宽度 */
  height: 50px; /* 设置区域高度 */
}
  </style>
  