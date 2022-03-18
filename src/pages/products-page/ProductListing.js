import "./productListing.css";
import Navigation from "../../components/navigation/Navigation";
import Sidebar from "../../components/sidebar/Sidebar";
import ProductSection from "../../components/product-section/ProductSection";
export default function ProductListing() {
  return (
    <div>
      <Navigation />
      <div class="product__main-container">
        <Sidebar />
        <ProductSection />
      </div>
    </div>
  );
}
