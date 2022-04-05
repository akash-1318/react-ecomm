const cartReducer = (state, action) => {
    const {type, payload} = action
    switch (type) {
        case "ADD_TO_CART":
            return {...state, cartProducts : payload}
        case "REMOVE_FROM_CART":
            return {...state, cartProducts : [...state.cartProducts.filter((cartItem) => cartItem._id !== payload._id)]}
        // case "INCREMENT":
        //     return {...state, cartProducts : state.cartProducts.map((qtItem) => qtItem._id === payload._id ? {...qtItem, quantity : qtItem.quantity + 1} : qtItem)}
        // case "DECREMENT":
        //     return {...state, cartProducts : state.cartProducts.map((qtItem) => qtItem._id === payload._id ? {...qtItem, quantity : qtItem.quantity > 1 ? qtItem.quantity - 1 : qtItem.quantity} : qtItem)}
        case "SET_CART" :
            return {...state, cartProducts : payload}
        case "UPDATE_CART":
            return {...state, updateCart : state.updateCart + 1}
        default:
            break;
    }
}

export {cartReducer}