import './detailCard.css'
export default function DetailCard() {
  return (
    <div class="card card__cs mycart">
      <div class="card__container card__container-horizontal">
        <div class="card__img card__img--cs mycart">
          <img
            src="../assets/images/model1.jpg"
            alt="card-img"
            class="card__img-c cs"
          />
        </div>
        <div class="card__name mycart">
          <div class="mycart__product-desc">
            <p class="product__name">Men Premium Jacket</p>
            <p class="selling__price">
              ₹2000 <span class="original__price">₹3999</span>{" "}
            </p>
            <p class="off__price">50% Off</p>
            <div class="quantity__div">
              Quantity :
              <div class="decrement">
                <i class="bx bx-minus"></i>
              </div>
              <div class="number">2</div>
              <div class="increment">
                <i class="bx bx-plus"></i>
              </div>
            </div>
            <div class="mycart__card-btn">
              {/* <!-- Milkyway UI Buttons --> */}

              <button class="btn solid__secondry mycart">
                Remove from cart
              </button>
              <button class="btn secondry__ouline-btn mycart">
                Move to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
