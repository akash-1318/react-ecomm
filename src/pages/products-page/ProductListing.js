import "./productListing.css";
import { Navigation } from "../../components/navigation/navigation";
import Sidebar from "../../components/sidebar/Sidebar";
import ProductSection from "../../components/product-section/ProductSection";
export default function ProductListing() {
  return (
    <div>
      <Navigation />
      <div className="product__main-container">
        <Sidebar />
        <ProductSection />
      </div>
    </div>
  );
}
