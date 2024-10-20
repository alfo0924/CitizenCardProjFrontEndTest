<template>
  <div class="member-login">
    <h3>會員登入</h3>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="email">電子郵件：</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div>
        <label for="password">密碼：</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">登入</button>
    </form>
  </div>
</template>

<script>
import { login } from '@/services/auth'

export default {
  name: 'MemberLogin',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await login(this.email, this.password)
        this.$emit('login-success', response.data)
      } catch (error) {
        console.error('登入失敗', error)
        // 處理錯誤，例如顯示錯誤消息
      }
    }
  }
}
</script>