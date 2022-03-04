import { ActionTypes } from "../contants/action-types"

export const setProducts = (products) => {
    return {
        type: 'SET_PRODUCTS',
        payload: products,
    }
}

export const selectedProducts = (products) => {
    return {
        type: 'SELECTED_PRODUCT',
        payload: products,
    }
}

export const removeSelectedProducts = () => {
    return {
        type: 'REMOVE_SELECTED_PRODUCT',
    }
}