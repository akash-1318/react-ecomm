import "./detailCard.css";
import { useCartContext } from "../../contexts/cart-context";
import { useWishContext } from "../../contexts/wishlist-context";
import { useAuthContext } from "../../contexts/auth-context";
import {addtoCart, removeFromCart, updateQty} from "../../pages/cart/cart-functions"
import {addToWishlist, deleteWishlistData} from "../../pages/wishlist/wishlist-functions"
import { product } from "prelude-ls";
import { useEffect, useState } from "react";

export default function DetailCard({ prod }) {
  const [qty, setQty] = useState(1)
  const {authCred} = useAuthContext()
  const {authToken, authStatus} = authCred
  const { cartState, cartDispatch } = useCartContext();
  const { wishState, wishDispatch } = useWishContext();
  const { quantity, detailedCart } = cartState;
  const { wishlistProducts } = wishState;

  return (
    <div className="card card__cs mycart">
      <div className="card__container card__container-horizontal">
        <div className="card__img card__img--cs mycart">
          <img src={prod.image} alt="card-img" className="card__img-c cs" />
        </div>
        <div className="card__name mycart">
          <div className="mycart__product-desc">
            <p className="product__name">
              {prod.name}
            </p>
            <p className="selling__price">
              ₹{prod.price}
            </p>
            <p className="off__price">0 % Off</p>
            <div className="quantity__div">
              Quantity :
              <button
                className="decrement"
                disabled = {prod.qty === 1}
                onClick={() =>
                  updateQty("decrement", prod, cartDispatch, authToken)
                }
              >
                <i className="bx bx-minus"></i>
              </button>
              <div className="number">
                {prod.qty}
              </div>
              <button
                className="increment"
                onClick={() =>
                  updateQty("increment", prod, cartDispatch, authToken)
                }
              >
                <i className="bx bx-plus"></i>
              </button>
            </div>
            <div className="mycart__card-btn">
              {/* <!-- Milkyway UI Buttons --> */}

              <button
                className="btn solid__secondry mycart"
                onClick={() =>
                  removeFromCart(prod, cartDispatch, authToken)
                }
              >
                Remove from cart
              </button>

              {wishState.wishlistProducts.find((item) => item._id === prod._id ) ? (
                <button class="btn secondry__ouline-btn mycart"
                onClick = {() => deleteWishlistData(prod,wishDispatch,authToken)}
                >Remove from Wishlist</button>
              ) : (
                <button class="btn secondry__ouline-btn mycart"
              onClick = {() => addToWishlist(prod,wishDispatch,authToken)}
              >Move to Wishlist</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
