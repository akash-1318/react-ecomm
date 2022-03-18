import './productSection.css'
import ProductCard from '../product-card/ProductCard';
export default function ProductSection() {
  return (
    <section className="product__right">
      <div className="main-primary__text">
        Showing All Products <span>(Showing 12 products)</span>
      </div>
      <div className="space__2rem"></div>
      <div className="grid__product">
        <ProductCard/>
      </div>
    </section>
  );
}
