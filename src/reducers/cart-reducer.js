const cartReducer = (state, action) => {
    const {type, payload} = action
    switch (type) {
        case "ADD_TO_CART":
            return {...state, cartProducts : [...state.cartProducts, {...payload, quantity : 1}]}
        case "REMOVE_FROM_CART":
            return {...state, cartProducts : [...state.cartProducts.filter((cartItem) => cartItem._id !== payload._id)]}
        case "INCREMENT":
            return {...state, cartProducts : state.cartProducts.map((qtItem) => qtItem._id === payload._id ? {...qtItem, quantity : qtItem.quantity + 1} : qtItem)}
        case "DECREMENT":
            return {...state, cartProducts : state.cartProducts.map((qtItem) => qtItem._id === payload._id ? {...qtItem, quantity : qtItem.quantity > 1 ? qtItem.quantity - 1 : qtItem.quantity} : qtItem)}
        default:
            break;
    }
}

export {cartReducer}