import "./productCard.css";
import { useWishContext } from "../../contexts/wishlist-context";

export default function ProductCard({ product }) {
  const { wishState, wishDispatch } = useWishContext();
  const { wishlistProducts, wishlisted } = wishState;
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
            <button className="btn solid__secondry prod__card-btn">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
