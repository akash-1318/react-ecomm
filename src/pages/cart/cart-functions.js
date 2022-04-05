import axios from "axios";

const addtoCart = async(product, cartDispatch, authToken) => {
    console.log("he;lloovgh")
    cartDispatch({type : "UPDATE_CART"})
    try{
      const cartResp = await axios.post('/api/user/cart', {product},
    {
      headers : {
        authorization : authToken
      }
    })
    console.log(cartResp)
    } catch(err){
      console.log(err)
    }
  }

  const removeFromCart = async(product, cartDispatch, authToken) => {
    try{
      const data = await axios.delete(`/api/user/cart/${product._id}`, {
        headers : {
          authorization : authToken
        }
      })
      console.log(data)
      cartDispatch({type : "REMOVE_FROM_CART", payload : product})
      cartDispatch({type : "UPDATE_CART"})
    } catch(err){
      console.log(err)
    }
  }

  const updateQty = async (type, product, cartDispatch, authToken) => {
      try{
          const incrementData = await axios.post(`/api/user/cart/${product._id}`,
          {
              action : { type: type }
          },
          {
              headers : {authorization: authToken}
          })
          console.log(incrementData.data.cart)
          cartDispatch({type : "SET_CART", payload : incrementData.data.cart})
      }catch(err){
          console.log(err)
      }
  }

//   const decrementProd = async (product, cartDispatch, authToken) => {
//       console.log("in func")
//     try{
//         const decrementData = await axios.post(`/api/user/cart/${product._id}`,
//         {
//             action : { type: "decrement" }
//         },
//         {
//             headers : {authorization: authToken}
//         })
//         console.log(decrementData.data.cart)
//         cartDispatch({type : "SET_CART", payload : incrementData.data.cart})
//     }catch(err){
//         console.log(err)
//     }
// }

  export {addtoCart, removeFromCart, updateQty}