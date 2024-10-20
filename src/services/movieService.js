import api from './api'

export const getMovies = () => {
    return api.get('/movies')
}

export const getShowings = (movieId) => {
    return api.get(`/movies/${movieId}/showings`)
}

export const bookSeats = (showingId, seats) => {
    return api.post(`/bookings`, { showingId, seats })
}