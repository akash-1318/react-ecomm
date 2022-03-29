import "./cart.css";
import {Navigation} from "../../components/navigation/navigation";
import DetailCard from "../../components/detailed-card/DetailCard";
import PriceDetail from "../../components/price-detail/PriceDetail";
import {useCartContext} from "../../contexts/cart-context"

export default function Cart() {
  const {cartState, cartDispatch} = useCartContext()
  const {cartProducts} = cartState
  const qunatityReducer = (previousProd, currentProd) => currentProd.quantity + previousProd
  const cartProductQuantity = cartProducts.reduce(qunatityReducer, 0)
  return (
    <div>
      <Navigation />
      <div className="mycart__main-container">
        <h1 className="mycart__main-heading">My Cart ({cartProductQuantity})</h1>
        <div className="mycart__product">
          {cartProducts.length !== 0 ? (
            <>
            <div className="card__container">
            {cartProducts.map((product) => {
              return (
                <DetailCard key = {product._id} prod = {product} />
              )
            })}
          </div>
          <PriceDetail /> 
            </>
          ) : (
            <>
            <div className="empty__wish-div">
            <img src="/assets/images/Empty-bag.svg" alt="empty-wish" className="wishlist__empty"/>
          </div>
            </>
          )}
          
        </div>
      </div>
    </div>
  );
}
