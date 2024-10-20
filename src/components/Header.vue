<template>
  <header>
    <nav>
      <router-link to="/">首頁</router-link> |
      <router-link to="/citymovie">CityMovie</router-link> |
      <router-link to="/wallet">電子錢包</router-link> |
      <router-link to="/discounts">優惠</router-link> |
      <router-link v-if="!isLoggedIn" to="/member">登入/註冊</router-link>
      <a v-else @click="logout" href="#">登出</a>
    </nav>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Header',
  computed: {
    ...mapGetters(['isLoggedIn'])
  },
  methods: {
    ...mapActions(['logout'])
  }
}
</script>