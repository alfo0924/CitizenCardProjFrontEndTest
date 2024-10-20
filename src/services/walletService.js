import api from './api'

export const getWalletBalance = () => {
    return api.get('/wallet/balance')
}

export const getTransactions = () => {
    return api.get('/wallet/transactions')
}

export const addFunds = (amount) => {
    return api.post('/wallet/add-funds', { amount })
}