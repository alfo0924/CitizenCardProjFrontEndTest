import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8080/api', // Adjust this to your backend URL
    headers: {
        'Content-Type': 'application/json',
    },
})

// Add any interceptors or other configuration here

export default api