import './productSection.css'
import ProductCard from '../product-card/ProductCard';
export default function ProductSection() {
  return (
    <section class="product__right">
      <div class="main-primary__text">
        Showing All Products <span>(Showing 12 products)</span>
      </div>
      <div class="space__2rem"></div>
      <div class="grid__product">
        <ProductCard/>
      </div>
    </section>
  );
}
