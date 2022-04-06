import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { cartReducer } from "../reducers/cart-reducer";
import { useAuthContext } from "./auth-context";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const { authCred } = useAuthContext();
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    cartProducts: [],
    totalItems: 0,
    cartPrice: 0,
    updateCart: 0,
    detailedCart: [],
  });

  useEffect(() => {
    if (authCred.authStatus) {
      const getCartData = async () => {
        try {
          const data = await axios.get("/api/user/cart", {
            headers: {
              authorization: authCred.authToken,
            },
          });
          cartDispatch({ type: "ADD_TO_CART", payload: data.data.cart });
        } catch (err) {
          console.log(err);
        }
      };
      getCartData();
    }
  }, [cartState.updateCart]);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => useContext(CartContext);

export { useCartContext, CartContextProvider };
