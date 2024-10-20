<template>
  <div class="home">
    <h1>歡迎使用市民卡系統</h1>
    <p>這裡是市民卡系統的首頁，您可以在這裡查看系統的主要功能。</p>
    <div class="feature-list">
      <router-link to="/member" class="feature-item">會員管理</router-link>
      <router-link to="/citymovie" class="feature-item">CityMovie</router-link>
      <router-link to="/wallet" class="feature-item">電子錢包</router-link>
      <router-link to="/discounts" class="feature-item">優惠信息</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.feature-list {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
.feature-item {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}
</style>