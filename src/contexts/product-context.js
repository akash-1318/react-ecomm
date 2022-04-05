import axios from "axios";
import {createContext, useContext, useEffect, useReducer} from 'react'
import { filterReducer } from "../reducers/product-reducer";
const ProductContext = createContext()

const initialStates = {
    sortByPrice : null, 
    filterByRating : null,
    priceRange : 2000,
    fastDelivery : false,
    arrivingSoon : false,
    clothingType : "",
    products : [], 
}

const ProductContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(filterReducer, initialStates)
    
    useEffect(()=>{
        const productData = async() => {
            try{
                const {data : {products}} = await axios.get('/api/products')
                dispatch({type : "SET_PRODUCTS", payload: products})
            } catch(err){
                console.log(err)
            }
        }
        productData()
    },[])
    
    return(
        <ProductContext.Provider value = {{state, dispatch}}>
            {children}
        </ProductContext.Provider>
    )
}

const useProductContext = () => useContext(ProductContext)

export {ProductContextProvider, useProductContext}