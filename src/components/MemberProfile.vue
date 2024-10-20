<template>
  <div class="member-profile">
    <h3>會員資料</h3>
    <div v-if="member">
      <p>Email: {{ member.email }}</p>
      <p>姓名: {{ member.firstName }} {{ member.lastName }}</p>
      <p>電話: {{ member.phone }}</p>
      <p>註冊日期: {{ formatDate(member.registerDate) }}</p>
      <p>最後登入: {{ formatDate(member.lastLoginTime) }}</p>
      <p>身份驗證狀態: {{ member.isVerified ? '已驗證' : '未驗證' }}</p>
      <button @click="editProfile">編輯資料</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MemberProfile',
  props: {
    member: Object
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleString()
    },
    editProfile() {
      // 實現編輯資料的邏輯
      this.$emit('edit-profile')
    }
  }
}
</script>