<template>
    <div>
      <h1>About Page</h1>
      <div class="link-container">
        <router-link to="/">Go to Home</router-link>
        <router-link to="/gallery">Go to Gallery</router-link>
        <router-link to="/first">Go to First</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutPage',
  };
  </script>
  
  <style scoped>
  .link-container {
    position: fixed; /* 固定定位 */
    bottom: 20px;    /* 距离底部20像素 */
    right: 20px;     /* 距离右边20像素 */
    display: flex;
    flex-direction: column; /* 竖向排列 */
  }
  .link-container a {
    margin: 5px 0; /* 每个链接之间的间隔 */
    text-decoration: none; /* 去掉下划线 */
    color: blue; /* 链接颜色 */
  }
  </style>
  