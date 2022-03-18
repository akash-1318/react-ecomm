import './detailCard.css'
export default function DetailCard() {
  return (
    <div className="card card__cs mycart">
      <div className="card__container card__container-horizontal">
        <div className="card__img card__img--cs mycart">
          <img
            src="../assets/images/model1.jpg"
            alt="card-img"
            className="card__img-c cs"
          />
        </div>
        <div className="card__name mycart">
          <div className="mycart__product-desc">
            <p className="product__name">Men Premium Jacket</p>
            <p className="selling__price">
              ₹2000 <span className="original__price">₹3999</span>{" "}
            </p>
            <p className="off__price">50% Off</p>
            <div className="quantity__div">
              Quantity :
              <div className="decrement">
                <i className="bx bx-minus"></i>
              </div>
              <div className="number">2</div>
              <div className="increment">
                <i className="bx bx-plus"></i>
              </div>
            </div>
            <div className="mycart__card-btn">
              {/* <!-- Milkyway UI Buttons --> */}

              <button className="btn solid__secondry mycart">
                Remove from cart
              </button>
              <button className="btn secondry__ouline-btn mycart">
                Move to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
