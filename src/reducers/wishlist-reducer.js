const wishlistReducer = (state, action) => {
    const {type, payload} = action
    switch (type) {
        case "ADD_TO_WISHLIST":
            return {...state, wishlistProducts : [...state.wishlistProducts, payload], wishlisted : true} 
        case "REMOVE_FROM_WISHLIST":
            return {...state, wishlistProducts : [...state.wishlistProducts.filter((prod) => prod._id !== payload._id)], wishlisted : false}            
        default:
            break;
    }
}

export {wishlistReducer}