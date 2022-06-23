import axios from "axios";
import { toast } from "react-toastify";

const addtoCart = async (product, cartDispatch, authToken) => {
  cartDispatch({ type: "UPDATE_CART" });
  try {
    const cartResp = await axios.post(
      "/api/user/cart",
      { product },
      {
        headers: {
          authorization: authToken,
        },
      }
    );
    toast.success("Product added to cart")
  } catch (err) {
    console.log(err);
  }
};

const removeFromCart = async (product, cartDispatch, authToken) => {
  try {
    const data = await axios.delete(`/api/user/cart/${product._id}`, {
      headers: {
        authorization: authToken,
      },
    });
    cartDispatch({ type: "REMOVE_FROM_CART", payload: product });
    cartDispatch({ type: "UPDATE_CART" });
    toast.success("Product removed from cart")
  } catch (err) {
    console.log(err);
  }
};

const updateQty = async (type, product, cartDispatch, authToken) => {
  try {
    const incrementData = await axios.post(
      `/api/user/cart/${product._id}`,
      {
        action: { type },
      },
      {
        headers: { authorization: authToken },
      }
    );
    cartDispatch({ type: "SET_CART", payload: incrementData.data.cart });
  } catch (err) {
    console.log(err);
  }
};

export { addtoCart, removeFromCart, updateQty };
