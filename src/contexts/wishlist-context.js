import {createContext, useContext, useReducer} from 'react'
import {wishlistReducer} from "../reducers/wishlist-reducer"

const wishContext = createContext()

const WishlistProvider = ({children}) => {
    const [wishState, wishDispatch] = useReducer(wishlistReducer, {
        wishlistProducts : [],
        wishlisted : false
    })
    
    return(
        <wishContext.Provider value={{wishState, wishDispatch}}>
            {children}
        </wishContext.Provider>
    )
}

const useWishContext = () => useContext(wishContext);

export {useWishContext, WishlistProvider}