const wishlistReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_WISHLIST":
      return { ...state, wishlistProducts: payload };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlistProducts: [
          ...state.wishlistProducts.filter((prod) => prod._id !== payload),
        ],
      };
    case "SET_PROD_ID":
      return { ...state, productCount: state.productCount + 1 };
    default:
      break;
  }
};

export { wishlistReducer };
