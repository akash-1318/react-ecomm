import { createContext, useContext, useEffect, useReducer } from "react";
import { wishlistReducer } from "../reducers/wishlist-reducer";
import { useAuthContext } from "./auth-context";
import axios from "axios";

const wishContext = createContext();

const WishlistProvider = ({ children }) => {
  const { authCred } = useAuthContext();
  const [wishState, wishDispatch] = useReducer(wishlistReducer, {
    wishlistProducts: [],
    productCount : 0,
  });

  useEffect(() => {
    if (authCred.authStatus) {
      const getWishlistData = async () => {
        try {
          const data = await axios.get("/api/user/wishlist", {
            headers: {
              authorization: authCred.authToken,
            },
          });
          wishDispatch({ type: "ADD_TO_WISHLIST", payload: data.data.wishlist });
        } catch (err) {
          console.log(err);
        }
      };
      getWishlistData();
    }
  },[wishState.productCount]);

  return (
    <wishContext.Provider value={{ wishState, wishDispatch }}>
      {children}
    </wishContext.Provider>
  );
};

const useWishContext = () => useContext(wishContext);

export { useWishContext, WishlistProvider };
