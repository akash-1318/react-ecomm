import axios from "axios";

const addToWishlist = async (product, wishDispatch, authToken) => {
  wishDispatch({ type: "SET_PROD_ID" });
  try {
    const wishResp = await axios.post(
      "/api/user/wishlist",
      { product },
      {
        headers: {
          authorization: authToken,
        },
      }
    );
  } catch (err) {
    console.log(err);
  }
};

const deleteWishlistData = async (product, wishDispatch, authToken) => {
  try {
    const data = await axios.delete(`/api/user/wishlist/${product._id}`, {
      headers: {
        authorization: authToken,
      },
    });
    wishDispatch({ type: "REMOVE_FROM_WISHLIST", payload: product._id });
    wishDispatch({ type: "SET_PROD_ID" });
  } catch (err) {
    console.log(err);
  }
};

export { addToWishlist, deleteWishlistData };
