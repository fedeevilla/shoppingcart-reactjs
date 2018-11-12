import axios from 'axios';

export const loadProducts = () => {
    return dispatch => {
        return axios.get(`http://localhost:3001/products`)
            .then(response => {
                dispatch({
                    type: "REPLACE_PRODUCTS",
                    products: response.data
                });
            });
    };
}

export const addToCart = product => {
    return {
        type: "ADD_TO_CART",
        product
    }
}

export const removeFromCart = index => {
    return {
        type: "REMOVE_FROM_CART",
        index
    }
}

export const removeAllFromCart = () => {
    return {
        type: "REMOVE_ALL_FROM_CART",
    }
}

export const deleteQtyFromItem = product => {
    return {
        type: "DELETE_QTY_FROM_ITEM",
        product
    }
}

