<template>
  <div class="movie-booking">
    <h3>預訂 {{ movie.name }}</h3>
    <div class="showings">
      <button v-for="showing in showings" :key="showing.id" @click="selectShowing(showing)">
        {{ formatDateTime(showing.showTime) }}
      </button>
    </div>
    <div v-if="selectedShowing" class="seat-selection">
      <!-- 座位選擇邏輯 -->
    </div>
    <button v-if="selectedSeats.length" @click="confirmBooking">確認預訂</button>
  </div>
</template>

<script>
import { getShowings, bookSeats } from '@/services/movieService'

export default {
  name: 'MovieBooking',
  props: {
    movie: Object
  },
  data() {
    return {
      showings: [],
      selectedShowing: null,
      selectedSeats: []
    }
  },
  async created() {
    try {
      this.showings = await getShowings(this.movie.id)
    } catch (error) {
      console.error('Failed to fetch showings', error)
    }
  },
  methods: {
    formatDateTime(dateTime) {
      // 實現日期時間格式化邏輯
    },
    selectShowing(showing) {
      this.selectedShowing = showing
      this.selectedSeats = []
    },
    async confirmBooking() {
      try {
        await bookSeats(this.selectedShowing.id, this.selectedSeats)
        this.$emit('booking-complete')
      } catch (error) {
        console.error('Booking failed', error)
      }
    }
  }
}
</script>