import './priceDetail.css'
export default function PriceDetail() {
  return (
    <div className="mycart__product-right">
      <h2>Price Details</h2>
      <hr />
      <div className="product__price-discount">
        <div className="product__price-desc">
          <div className="desc__div">
            <p>Price (2 items)</p>
            <p>₹4999</p>
          </div>
          <div className="desc__div">
            <p>Discount</p>
            <p>-₹1999</p>
          </div>
          <div className="desc__div">
            <p>Delivery Charges</p>
            <p>₹499</p>
          </div>
          <hr />
          <div className="desc__div total__amount">
            <p>Total Amount</p>
            <p>₹3499</p>
          </div>
        </div>
        <hr />
        <p className="save__price-text">You will save ₹1999 on this order</p>

        {/* <!-- Milkyway UI Button --> */}

        <button className="btn solid__primary place__order-btn">Place Order</button>
      </div>
    </div>
  );
}
