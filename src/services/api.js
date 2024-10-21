import axios from 'axios'

const api = axios.create({
    baseURL: '/api'  // 這裡使用相對路徑，Vite 會處理代理
})

export default api