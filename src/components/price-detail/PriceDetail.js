import './priceDetail.css'
export default function PriceDetail() {
  return (
    <div class="mycart__product-right">
      <h2>Price Details</h2>
      <hr />
      <div class="product__price-discount">
        <div class="product__price-desc">
          <div class="desc__div">
            <p>Price (2 items)</p>
            <p>₹4999</p>
          </div>
          <div class="desc__div">
            <p>Discount</p>
            <p>-₹1999</p>
          </div>
          <div class="desc__div">
            <p>Delivery Charges</p>
            <p>₹499</p>
          </div>
          <hr />
          <div class="desc__div total__amount">
            <p>Total Amount</p>
            <p>₹3499</p>
          </div>
        </div>
        <hr />
        <p class="save__price-text">You will save ₹1999 on this order</p>

        {/* <!-- Milkyway UI Button --> */}

        <button class="btn solid__primary place__order-btn">Place Order</button>
      </div>
    </div>
  );
}
