import './priceDetail.css'
import { useCartContext } from '../../contexts/cart-context';

export default function PriceDetail() {
  const {cartState, cartDispatch} = useCartContext()
  const {cartProducts} = cartState

  const amountReducer = (previousAmount, currentAmount) => previousAmount + (currentAmount.price * currentAmount.qty)
  const cartTotalAmount = cartProducts.reduce(amountReducer, 0)

  const qunatityReducer = (previousProd, currentProd) => currentProd.qty + previousProd
  const cartProductQuantity = cartProducts.reduce(qunatityReducer, 0)


  return (
    <div className="mycart__product-right">
      <h2>Price Details</h2>
      <hr />
      <div className="product__price-discount">
        <div className="product__price-desc">
          <div className="desc__div">
            <p>Price ({cartProductQuantity} items)</p>
            <p>₹{cartTotalAmount}</p>
          </div>
          <div className="desc__div">
            <p>Discount</p>
            <p>-₹0</p>
          </div>
          <div className="desc__div">
            <p>Delivery Charges</p>
            <p>₹0</p>
          </div>
          <hr />
          <div className="desc__div total__amount">
            <p>Total Amount</p>
            <p>₹{cartTotalAmount}</p>
          </div>
        </div>
        <hr />
        <p className="save__price-text">You will save ₹0 on this order</p>

        {/* <!-- Milkyway UI Button --> */}

        <button className="btn solid__primary place__order-btn">Place Order</button>
      </div>
    </div>
  );
}