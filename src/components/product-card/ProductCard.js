import "./productCard.css";

export default function ProductCard() {
  return (
    <div className="card prod__card">
      <div className="card__container">
        <div className="card__img">
          <img
            src="../assets/images/model1.jpg"
            alt="card-img"
            className="card__img-c prod__card-img"
          />
        </div>
        <div className="like__product">
          <i className="bx bx-heart"></i>
        </div>
        <div className="card__name prod__card-name">
          <p className="card__charc-name prod__charc-name">Men premium Jacket</p>
          <p className="card__charc-series prod__charc-series">₹ 2000</p>
          <button className="btn solid__secondry prod__card-btn">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
