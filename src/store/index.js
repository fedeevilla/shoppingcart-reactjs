import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reducer = (state, action) => {

    if (action.type === "REPLACE_PRODUCTS") {
        return {
            ...state,
            products: action.products
        };
    }
    else if (action.type === "ADD_TO_CART") {

        var exist = false;

        for (var i = 0; i < state.cart.length; i++) {
            if (state.cart[i].id === action.product.id) {
                exist = true;
                break;
            }
        }

        if (exist) {
            return {
                ...state,
                cart: state.cart.map(product => {
                    if (product.id === action.product.id) {
                        product.qty++;
                    }
                    return product;
                })
            };
        }

        action.product.qty = 1;

        return {
            ...state,
            cart: state.cart.concat(action.product)
        };


    } else if (action.type === "REMOVE_FROM_CART") {
        return {
            ...state,
            cart: state.cart.filter((product, index) => index !== action.index)
        };
    } else if (action.type === "REMOVE_ALL_FROM_CART") {
        return {
            ...state,
            cart: []
        };
    }

    else if (action.type === "DELETE_QTY_FROM_ITEM") {
        return {
            ...state,
            cart: state.cart.map(product => {
                if (product.id === action.product.id) {
                    product.qty--;
                }
                return product;
            })
        };
    }

    return state;
};

const logger = store => next => action => {
    let result = next(action);
    return result;
}

export default createStore(reducer, { cart: [], products: [] }, applyMiddleware(logger, thunk));