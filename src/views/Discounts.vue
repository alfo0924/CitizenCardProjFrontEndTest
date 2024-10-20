<template>
  <div class="discounts">
    <h2>優惠信息</h2>
    <DiscountList @use-discount="useDiscount" />
  </div>
</template>

<script>
import DiscountList from '@/components/DiscountList.vue'

export default {
  name: 'Discounts',
  components: {
    DiscountList
  },
  methods: {
    useDiscount(discountId) {
      // 實現使用優惠的邏輯
      console.log('Using discount:', discountId)
    }
  }
}
</script>