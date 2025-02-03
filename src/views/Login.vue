<!-- src/views/Login.vue -->
<template>
    <div class="login">
      <h2>登录</h2>
      <form @submit.prevent="handleLogin">
        <div>
          <label for="username">用户名:</label>
          <input type="text" v-model="username" id="username" required />
        </div>
        <div>
          <label for="password">密码:</label>
          <input type="password" v-model="password" id="password" required />
        </div>
        <button type="submit">登录</button>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        errorMessage: ''
      };
    },
    methods: {
      async handleLogin() {
        try {
          // 这里发送登录请求到后端 API
          const response = await this.$axios.post('/api/login', {
            username: this.username,
            password: this.password
          });
  
          // 登录成功，存储token
          localStorage.setItem('authToken', response.data.token);
  
          // 跳转到主页
          this.$router.push({ name: 'home' });
        } catch (error) {
          // 登录失败
          this.errorMessage = '用户名或密码错误';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* 样式代码略 */
  </style>
  