import "./detailCard.css";
import { useCartContext } from "../../contexts/cart-context";
import { useWishContext } from "../../contexts/wishlist-context";

export default function DetailCard({ prod }) {
  const { cartState, cartDispatch } = useCartContext();
  const { wishState, wishDispatch } = useWishContext();
  const { quantity } = cartState;
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
              <div
                className="decrement"
                onClick={() =>
                  cartDispatch({ type: "DECREMENT", payload: prod })
                }
              >
                <i className="bx bx-minus"></i>
              </div>
              <div className="number">{prod.quantity}</div>
              <div
                className="increment"
                onClick={() =>
                  cartDispatch({ type: "INCREMENT", payload: prod })
                }
              >
                <i className="bx bx-plus"></i>
              </div>
            </div>
            <div className="mycart__card-btn">
              {/* <!-- Milkyway UI Buttons --> */}

              <button
                className="btn solid__secondry mycart"
                onClick={() =>
                  cartDispatch({ type: "REMOVE_FROM_CART", payload: prod })
                }
              >
                Remove from cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
