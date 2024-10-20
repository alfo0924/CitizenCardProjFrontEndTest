<template>
  <div class="movie-list">
    <div v-for="movie in movies" :key="movie.id" class="movie-item" @click="selectMovie(movie)">
      <h3>{{ movie.name }}</h3>
      <p>時長: {{ movie.duration }} 分鐘</p>
      <p>{{ movie.description }}</p>
    </div>
  </div>
</template>

<script>
import { getMovies } from '@/services/movieService'

export default {
  name: 'CityMovieList',
  data() {
    return {
      movies: []
    }
  },
  async created() {
    try {
      this.movies = await getMovies()
    } catch (error) {
      console.error('Failed to fetch movies', error)
    }
  },
  methods: {
    selectMovie(movie) {
      this.$emit('select-movie', movie)
    }
  }
}
</script>