<template>
  <div>
    <h2>API Test</h2>
    <button @click="testApi">Test API</button>
    <p v-if="response">{{ response }}</p>
  </div>
</template>

<script>
import api from '../services/api'

export default {
  name: 'TestComponent',
  data() {
    return {
      response: null
    }
  },
  methods: {
    async testApi() {
      try {
        const response = await api.get('/test')
        this.response = response.data
        console.log('API response:', response.data)
      } catch (error) {
        console.error('API error:', error)
        this.response = 'Error: ' + error.message
      }
    }
  }
}
</script>