import api from './api'

export const getDiscounts = () => {
    return api.get('/discounts')
}

export const useDiscount = (discountId, memberId) => {
    return api.post(`/discounts/${discountId}/use`, { memberId })
}