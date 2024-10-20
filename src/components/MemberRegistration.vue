<template>
  <div class="member-registration">
    <h3>會員註冊</h3>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="email">電子郵件：</label>
        <input type="email" id="email" v-model="form.email" required>
      </div>
      <div>
        <label for="password">密碼：</label>
        <input type="password" id="password" v-model="form.password" required>
      </div>
      <div>
        <label for="confirmPassword">確認密碼：</label>
        <input type="password" id="confirmPassword" v-model="form.confirmPassword" required>
      </div>
      <div>
        <label for="phone">電話：</label>
        <input type="tel" id="phone" v-model="form.phone">
      </div>
      <button type="submit">註冊</button>
    </form>
  </div>
</template>

<script>
import { register } from '@/services/auth'

export default {
  name: 'MemberRegistration',
  data() {
    return {
      form: {
        email: '',
        password: '',
        confirmPassword: '',
        phone: ''
      }
    }
  },
  methods: {
    async handleSubmit() {
      if (this.form.password !== this.form.confirmPassword) {
        alert('密碼不匹配')
        return
      }
      try {
        const response = await register(this.form)
        this.$emit('registration-success', response.data)
      } catch (error) {
        console.error('註冊失敗', error)
        // 處理錯誤，例如顯示錯誤消息
      }
    }
  }
}
</script>