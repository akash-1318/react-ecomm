import axios from "axios";
import {toast} from "react-toastify"

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
    toast.success("Product added to wishlist")
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
    toast.success("Product removed from wishlist")
  } catch (err) {
    console.log(err);
  }
};

export { addToWishlist, deleteWishlistData };
