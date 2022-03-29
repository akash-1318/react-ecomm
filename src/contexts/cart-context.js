import {createContext, useContext, useReducer} from 'react'
import { cartReducer } from '../reducers/cart-reducer'

const CartContext = createContext()

const CartContextProvider = ({children}) => {
    const [cartState, cartDispatch] = useReducer(cartReducer, {
        cartProducts : [],
        totalItems : 0,
        cartPrice : 0,
    })
    
    return(
        <CartContext.Provider value={{cartState, cartDispatch}}>
            {children}
        </CartContext.Provider>
    )
}

const useCartContext = () => useContext(CartContext)

export {useCartContext, CartContextProvider}