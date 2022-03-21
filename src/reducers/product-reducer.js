const filterReducer = (state, action) => {
    switch (action.type) {
        case "SET_PRODUCTS":
            return {...state, products : action.payload}
        case "SORT":
            return {...state, sortByPrice : action.payload}
        case "RATING":
            return {...state, filterByRating : action.payload}
        case "PRICE_RANGE":
            return {...state, priceRange : action.payload}
        case "FAST_DELIVERY":
            return {...state, fastDelivery : !state.fastDelivery}
        case "ARRIVAL":
            return {...state, arrivingSoon : !state.arrivingSoon}
        case "CLEAR_ALL":
            return {
                ...state,
                sortByPrice : null,
                filterByRating : null,
                priceRange : 2000,
                fastDelivery : false,
                arrivingSoon : false,
            }
        default:
            return state
    }
} 

export {filterReducer}