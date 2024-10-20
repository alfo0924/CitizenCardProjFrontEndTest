import api from './api'

export const login = (email, password) => {
    return api.post('/auth/login', { email, password })
}

export const register = (memberData) => {
    return api.post('/auth/register', memberData)
}

export const logout = () => {
    return api.post('/auth/logout')
}

export const getCurrentUser = () => {
    return api.get('/auth/current-user')
}