import "./wishlist.css";
import {Navigation} from "../../components/navigation/navigation";
import ProductCard from "../../components/product-card/ProductCard";
import { useWishContext } from "../../contexts/wishlist-context";

export default function Wishlist() {
  const {wishState} = useWishContext()
  const {wishlistProducts, wishlisted} = wishState
  
  return (
    <div>
      <Navigation />
      <div className="wishlist__main-container">
        <h1 className="wishlist__main-heading">My Wishlist</h1>
        {wishlistProducts.length !== 0 ? (
          <div className="grid__product wishlist">
          {wishlistProducts.map((product) => {
            return (
              <ProductCard key = {product._id} product={product}/>
            )
          })}
        </div>
        ) : (
          <div className="empty__wish-div">
            <img src="/assets/images/Empty-bag.svg" alt="empty-wish" className="wishlist__empty"/>
          </div>
        )}
        
      </div>
    </div>
  );
}
