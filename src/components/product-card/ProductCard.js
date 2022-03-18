import "./productCard.css";

export default function ProductCard() {
  return (
    <div class="card prod__card">
      <div class="card__container">
        <div class="card__img">
          <img
            src="../assets/images/model1.jpg"
            alt="card-img"
            class="card__img-c prod__card-img"
          />
        </div>
        <div class="like__product">
          <i class="bx bx-heart"></i>
        </div>
        <div class="card__name prod__card-name">
          <p class="card__charc-name prod__charc-name">Men premium Jacket</p>
          <p class="card__charc-series prod__charc-series">₹ 2000</p>
          <button class="btn solid__secondry prod__card-btn">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
