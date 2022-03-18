import "./wishlist.css";
import Navigation from "../../components/navigation/Navigation";
import ProductCard from "../../components/product-card/ProductCard";
export default function () {
  return (
    <div>
      <Navigation />
      <div class="wishlist__main-container">
        <h1 class="wishlist__main-heading">My Wishlist</h1>
        <div class="grid__product wishlist">
          <ProductCard/>
        </div>
      </div>
    </div>
  );
}