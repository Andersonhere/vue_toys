<!-- src/components/LogoutButton.vue -->
<template>
    <button @click="logout">退出登录</button>
  </template>
  
  <script>
  export default {
    methods: {
      logout() {
        // 清除 token
        localStorage.removeItem('authToken');
        
        // 跳转到登录页面
        this.$router.push({ name: 'login' });
      }
    }
  };
  </script>
  
  <style scoped>
  /* 样式代码略 */
  </style>
  