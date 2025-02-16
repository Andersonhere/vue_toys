<template>
    <div id="app" @mousemove="handleMouseMove" @mouseup="handleMouseUp" @touchmove="handleMouseMove" @touchend="handleMouseUp">
      <div class="image-container">
        <!-- 下一页链接 -->
        <div class="link-container">
          <router-link to="/second">
            <img src="../assets/下一页.png" />
          </router-link>
        </div>
  
        <!-- 可拖拽的图片 -->
        <div class="image-list-container">
          <img
            v-for="(img, index) in imageList"
            :key="index"
            :src="img.src"
            :alt="img.alt"
            class="draggable-image"
            :style="{ left: img.x + 'px', top: img.y + 'px', position: 'absolute' }"
            @mousedown="handleMouseDown($event, index)"
            @touchstart="handleMouseDown($event, index)"
          />
        </div>
  
        <!-- 开关、电线和拖拽区域 -->
        <div class="wrapper">
          <div class="container">
            <div class="box button_container">
              <button :class="{ 'on': isOn }" @click="toggleSwitch($event)" @touchstart="toggleSwitch($event)"></button>
            </div>
            <div class="box line-area" ref="line"></div>
            <div class="box drop-area" ref="dropArea"></div>
          </div>
        </div>
      </div>
  
      <!-- 音频 -->
      <audio ref="audio" src="../music/Claudio The Worm.mp3"></audio>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FirstPage',
    data() {
      return {
        imageList: [
          { src: require('../assets/蓝色三角形.png'), x: 0, y: 0, alt: 'b' },
          { src: require('../assets/蓝色三角形.png'), x: 0, y: 0, alt: 'b' },
          { src: require('../assets/黄色矩形.png'), x: 0, y: 0, alt: 'y' },
          { src: require('../assets/蓝色矩形.png'), x: 0, y: 0, alt: 'y' },
          { src: require('../assets/黄色三角形.png'), x: 0, y: 0, alt: 'r' },
          { src: require('../assets/黄色三角形.png'), x: 0, y: 0, alt: 'r' },
          { src: require('../assets/蓝色圆形.png'), x: 0, y: 0, alt: 'r' },
          { src: require('../assets/黄色圆形.png'), x: 0, y: 0, alt: 'r' },
        ],
        draggingIndex: null,
        offsetX: 0,
        offsetY: 0,
        isOn: false,
        isbegin: true,
        imageList_alt: [],
      };
    },
    mounted() {
      this.centerImages();
    },
    methods: {
      // 计算图片的初始位置，使其居中显示
      centerImages() {
        const containerWidth = this.$el.querySelector('.image-list-container').clientWidth;
        const imageWidth = 100; // 图片宽度
        const gap = 20; // 图片之间的间距
        const imagesPerRow = Math.floor(containerWidth / (imageWidth + gap));
        const offsetX = (containerWidth - imagesPerRow * (imageWidth + gap)) / 2;
  
        this.imageList.forEach((img, index) => {
          const row = Math.floor(index / imagesPerRow);
          const col = index % imagesPerRow;
          img.x = offsetX + col * (imageWidth + gap);
          img.y = row * (imageWidth + gap);
        });
      },
      // 切换开关状态
      toggleSwitch(event) {
        this.isOn = !this.isOn;
        if (!this.isOn) {
          this.$refs.audio.pause();
          this.$refs.audio.currentTime = 0;
        } else {
          this.checkDropArea();
        }
        if (this.isbegin) {
          setTimeout(() => {
            this.$refs.audio.pause();
            this.$refs.audio.currentTime = 0;
          }, 100);
          this.$refs.audio.play();
          this.isbegin = false;
        }
        console.log('Switch toggled:', this.isOn);
        event.preventDefault();
      },
      // 处理鼠标/触摸按下事件
      handleMouseDown(event, index) {
        this.draggingIndex = index;
        const clientX = event.touches ? event.touches[0].clientX : event.clientX;
        const clientY = event.touches ? event.touches[0].clientY : event.clientY;
        this.offsetX = clientX - this.imageList[index].x;
        this.offsetY = clientY - this.imageList[index].y;
        event.preventDefault();
      },
      // 处理鼠标/触摸移动事件
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
      // 处理鼠标/触摸释放事件
      handleMouseUp() {
        this.draggingIndex = null;
      },
      // 检查图片是否在拖拽区域内
      checkDropArea() {
        if (!this.isOn) {
          return;
        }
        let count = 0;
        const dropArea = this.$refs.dropArea.getBoundingClientRect();
        this.imageList.forEach((img) => {
          const imgRect = {
            left: img.x,
            top: img.y,
            right: img.x + 100,
            bottom: img.y + 100,
            alt: img.alt,
          };
          if (
            imgRect.left < dropArea.right &&
            imgRect.right > dropArea.left &&
            imgRect.top < dropArea.bottom &&
            imgRect.bottom > dropArea.top
          ) {
            this.imageList_alt[count] = imgRect.alt;
            count++;
          }
        });
  
        if (count == 2 && this.imageList_alt[0] == this.imageList_alt[1]) {
          this.$refs.audio.play();
        } else {
          this.$refs.audio.pause();
          this.$refs.audio.currentTime = 0;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* 响应式布局 */
  @media (max-width: 1024px) {
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
      width: 40px;
    }
  }
  
  /* 全局样式 */
  #app {
    text-align: center;
    position: relative;
    height: 100vh;
  }
  
  /* 图片容器 */
  .image-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  
  /* 图片列表容器 */
  .image-list-container {
    position: relative;
    width: 100%;
    height: 200px; /* 根据需要调整高度 */
    margin-bottom: 20px;
  }
  
  /* 可拖拽的图片 */
  .draggable-image {
    width: 100px;
    height: 100px;
    cursor: grab;
    z-index: 2;
  }
  
  /* 链接容器 */
  .link-container {
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
  }
  
  .link-container img {
    margin: 5px 0;
    width: 50px;
    height: auto;
    cursor: pointer;
    border: 2px solid #ccc;
    border-radius: 5px;
    padding: 5px;
  }
  
  /* 拖拽区域 */
  .drop-area {
    width: 400px;
    height: 150px;
    background-image: url('../assets/玩具1.png');
    background-repeat: no-repeat;
    margin-bottom: 30px;
  }
  
  /* 电线区域 */
  .line-area {
    background-image: url('../assets/电线.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  
  /* 开关按钮 */
  .button_container {
    width: 100px;
    height: 100px;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 1;
    margin-bottom: 30px;
  }
  
  button {
    width: 100px;
    height: 100px;
    background-image: url('../assets/开关-灰色.png');
    background-size: cover;
    border-radius: 50%;
    transition: background-image 0.3s;
  }
  
  button.on {
    background-image: url('../assets/开关蓝色.jpg');
  }
  </style>