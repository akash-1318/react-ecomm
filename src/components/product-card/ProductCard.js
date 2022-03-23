import "./productCard.css";

export default function ProductCard({product}) {
  
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
          <div className="like__product">
            <i className="bx bx-heart"></i>
          </div>
          <div className="card__name prod__card-name">
            <p className="card__charc-name prod__charc-name">{product.name}</p>
            <p className="card__charc-series prod__charc-series">₹ {product.price}</p>
            <button className="btn solid__secondry prod__card-btn">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}