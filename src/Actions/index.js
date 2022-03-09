export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_TO_CART = 'REMOVE_TO_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const LOAD_CART = 'LOAD_CART';

export const addToCart = payload => {
    return {
        type: ADD_TO_CART,
        payload
    }
}

export const removeToCart = payload => {
    return {
        type: REMOVE_TO_CART,
        payload
    }
}

export const clearCart = () => {
    return {
        type: CLEAR_CART,
    }
}

export const loadCart = payload => {
    return {
        type: LOAD_CART,
        payload
    }
}
