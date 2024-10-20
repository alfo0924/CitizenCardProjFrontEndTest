<template>
  <div class="discount-list">
    <div v-for="discount in discounts" :key="discount.id" class="discount-item">
      <h3>{{ discount.name }}</h3>
      <p>{{ discount.description }}</p>
      <p>有效期至: {{ formatDate(discount.validUntil) }}</p>
      <button @click="useDiscount(discount.id)">使用優惠</button>
    </div>
  </div>
</template>

<script>
import { getDiscounts } from '@/services/discountService.js'

export default {
  name: 'DiscountList',
  data() {
    return {
      discounts: []
    }
  },
  async created() {
    try {
      this.discounts = await getDiscounts()
    } catch (error) {
      console.error('Failed to fetch discounts', error)
    }
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString()
    },
    useDiscount(discountId) {
      this.$emit('use-discount', discountId)
    }
  }
}
</script>