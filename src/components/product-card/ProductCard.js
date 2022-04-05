import "./productCard.css";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import {addToWishlist, deleteWishlistData} from '../../pages/wishlist/wishlist-functions'
import {addtoCart, removeFromCart} from '../../pages/cart/cart-functions'
import { useWishContext } from "../../contexts/wishlist-context";
import { useCartContext } from "../../contexts/cart-context";
import { useAuthContext } from "../../contexts/auth-context";

export default function ProductCard({ product }) {
  const navigate = useNavigate()
  const { wishState, wishDispatch } = useWishContext();
  const {cartState, cartDispatch} = useCartContext();
  const {authCred}  = useAuthContext();
  const {authToken, authStatus} = authCred
  const {cartProducts} = cartState
  const { wishlistProducts } = wishState;

  return (
    <>
      <div className="card prod__card">
        <div className="card__container">
          <div className="card__img">
            <img
              src={product.image}
              alt="card-img"
              className="card__img-c prod__card-img"
            />
          </div>
          {wishlistProducts.find((prod) => prod._id === product._id) ? (
            <div class="like__product product__liked"
            onClick={() =>
              deleteWishlistData(product,wishDispatch,authToken, authStatus)
            }
            >
              <i class="bx bxs-heart"></i>
            </div>
          ) : (
            <div
              className="like__product"
              onClick={() =>{
                if(authStatus){
                  addToWishlist(product,wishDispatch,authToken, authStatus)
                } else{
                  navigate('/login')
                }
              }
                
              }
            >
              <i className="bx bx-heart"></i>
            </div>
          )}

          <div className="card__name prod__card-name">
            <p className="card__charc-name prod__charc-name">{product.name}</p>
            <p className="card__charc-series prod__charc-series">
              ₹ {product.price}
            </p>
            {cartProducts.find((cartProd) => cartProd._id === product._id) ? (
              <button className="btn solid__primary prod__card-btn" 
              // onClick={() => cartDispatch({type : "REMOVE_FROM_CART", payload : product})}
              onClick = {() => removeFromCart(product, cartDispatch, authToken)}
              >
              Remove From Cart
            </button>
            ) : (
              <button className="btn solid__secondry prod__card-btn" 
              // onClick={() => cartDispatch({type : "ADD_TO_CART", payload : product})}
              onClick={() => {
                if(authStatus){
                  addtoCart(product, cartDispatch, authToken)
                } else{
                  navigate('/login')
                }
              }}
              >
              Add To Cart
            </button>
            )}
            
          </div>
        </div>
      </div>
    </>
  );
}
