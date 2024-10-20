<template>
  <div class="city-movie">
    <h2>CityMovie</h2>
    <CityMovieList @select-movie="selectMovie" />
    <MovieBooking v-if="selectedMovie" :movie="selectedMovie" @booking-complete="onBookingComplete" />
  </div>
</template>

<script>
import CityMovieList from '@/components/CityMovieList.vue'
import MovieBooking from '@/components/MovieBooking.vue'

export default {
  name: 'CityMovie',
  components: {
    CityMovieList,
    MovieBooking
  },
  data() {
    return {
      selectedMovie: null
    }
  },
  methods: {
    selectMovie(movie) {
      this.selectedMovie = movie
    },
    onBookingComplete() {
      this.selectedMovie = null
      // 可以添加一些提示或跳转逻辑
    }
  }
}
</script>