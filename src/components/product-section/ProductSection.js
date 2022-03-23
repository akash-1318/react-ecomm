import './productSection.css'
import ProductCard from '../product-card/ProductCard';
import {useProductContext} from '../../contexts/product-context';
import {sortForPrice} from '../../utils/sort-and-filter/sort';
import { filterForRating, priceRangeFilter, categoryFilter } from "../../utils/sort-and-filter/filter";


export default function ProductSection() {

const {state} = useProductContext()
const {products,sortByPrice, filterByRating, priceRange, fastDelivery, arrivingSoon, clothingType} = state
const sortedData = sortForPrice(products, sortByPrice)
const filterRating = filterForRating(sortedData, filterByRating)
const filteredData = priceRangeFilter(filterRating, priceRange)
const finalFilter = categoryFilter(filteredData,fastDelivery, arrivingSoon, clothingType)

  return (
    <section className="product__right">
      <div className="main-primary__text">
        Showing All Products <span>(Showing {finalFilter.length} products)</span>
      </div>
      <div className="space__2rem"></div>
      <div className="grid__product">
        {finalFilter.map((product) => {
          return(
          <ProductCard product={product}/>
          )
        })}
      </div>
    </section>
  );
}
