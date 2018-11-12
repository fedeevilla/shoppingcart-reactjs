import axios from 'axios';

export const loadProducts = () => {
    return dispatch => {
        return axios.get(`https://www.repartienda.com/wp-json/wc/v1/products?category=22&per_page=30&consumer_key=ck_c5476ef4756a9191b91fa026dffa9bdc1aea42dc&consumer_secret=cs_2657e55b8b835273b00a45b901c1af84a72ff216`)
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

