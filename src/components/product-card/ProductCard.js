import "./productCard.css";
import { useWishContext } from "../../contexts/wishlist-context";
import { useCartContext } from "../../contexts/cart-context";

export default function ProductCard({ product }) {
  const { wishState, wishDispatch } = useWishContext();
  const {cartState, cartDispatch} = useCartContext();
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
              wishDispatch({ type: "REMOVE_FROM_WISHLIST", payload: product })
            }
            >
              <i class="bx bxs-heart"></i>
            </div>
          ) : (
            <div
              className="like__product"
              onClick={() =>
                wishDispatch({ type: "ADD_TO_WISHLIST", payload: product })
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
              <button className="btn solid__primary prod__card-btn" onClick={() => cartDispatch({type : "REMOVE_FROM_CART", payload : product})}>
              Remove From Cart
            </button>
            ) : (
              <button className="btn solid__secondry prod__card-btn" onClick={() => cartDispatch({type : "ADD_TO_CART", payload : product})}>
              Add To Cart
            </button>
            )}
            
          </div>
        </div>
      </div>
    </>
  );
}
