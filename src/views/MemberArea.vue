<template>
  <div class="member-area">
    <h2>會員區域</h2>
    <div v-if="!isLoggedIn">
      <MemberLogin @login-success="onLoginSuccess" />
      <MemberRegistration />
    </div>
    <div v-else>
      <MemberProfile :member="currentMember" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import MemberLogin from '@/components/MemberLogin.vue'
import MemberRegistration from '@/components/MemberRegistration.vue'
import MemberProfile from '@/components/MemberProfile.vue'

export default {
  name: 'MemberArea',
  components: {
    MemberLogin,
    MemberRegistration,
    MemberProfile
  },
  computed: {
    ...mapGetters(['isLoggedIn', 'currentMember'])
  },
  methods: {
    ...mapActions(['login']),
    onLoginSuccess(member) {
      this.login(member)
    }
  }
}
</script>