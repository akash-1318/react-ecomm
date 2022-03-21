import { useReducer } from "react";
import "./sidebar.css";
import {useProductContext} from '../../contexts/product-context'
export default function Sidebar() {
  const {state, dispatch} = useProductContext()
  return (
    <>
      <aside className="filter__left">
        <div className="filter__title">
          <button className="filter__title-btn filter">Filters</button>
          <button className="filter__title-btn clear" onClick={()=> dispatch({type : "CLEAR_ALL"})}>Clear</button>
        </div>
        <div className="space__2rem"></div>
        <div className="price__filter">
          <h3 onClick = {() => dispatch({type : "MEN_CLOTHING"})}>Price</h3>
          <div>
            <div className="amount__div">
              <p>0</p>
              <p>1000</p>
              <p>2000</p>
            </div>
            <input
              type="range"
              min="1"
              max="2000"
              value={state.priceRange}
              className="slider"
              id="myRange"
              onChange = {(e)=> dispatch({type : "PRICE_RANGE", payload : e.target.value})}
            />
          </div>
        </div>

        <div className="space__2rem"></div>
        <div className="filter__type">
          <h3>Category</h3>
          <div className="filter__section">
          <label> <input 
          type="checkbox" 
          value = "1" 
          checked = {state.fastDelivery === true}
          onChange = {()=> dispatch({type : "FAST_DELIVERY"})}
          /> Fast Delivery</label>
          </div>
          <div className="filter__section">
          <label> <input 
          type="checkbox" 
          value = "1" 
          checked = {state.arrivingSoon === true}
          onChange = {()=> dispatch({type : "ARRIVAL"})}
          /> New Arrivals</label>
          </div>
        </div>

        <div className="space__2rem"></div>
        <div className="filter__type">
          <h3>Rating</h3>
          {/* <!-- Milkyway UI Radio Input --> */}
          <div className="radio">
            <label for="radio-1">
              <input type="radio" 
              name="rating-radio" 
              className="radio__input"
              checked = {state.filterByRating === "FOUR_AND_ABOVE"}
              onChange = {()=> dispatch({type : "RATING", payload : "FOUR_AND_ABOVE"})}
              />
            </label>
            4 stars & above
          </div>
          <div className="radio">
            <label for="radio-1">
              <input type="radio" 
              name="rating-radio" 
              className="radio__input"
              checked = {state.filterByRating === "THREE_AND_ABOVE"}
              onChange = {()=> dispatch({type : "RATING", payload : "THREE_AND_ABOVE"})}
              />
            </label>
            3 stars & above
          </div>
          <div className="radio">
            <label for="radio-1">
              <input type="radio" 
              name="rating-radio"
              className="radio__input" 
              checked = {state.filterByRating === "TWO_AND_ABOVE"}
              onChange = {()=> dispatch({type : "RATING", payload : "TWO_AND_ABOVE"})}
              />
            </label>
            2 stars & above
          </div>
          <div className="radio">
            <label for="radio-1">
              <input type="radio" 
              name="rating-radio" 
              className="radio__input" 
              checked = {state.filterByRating === "ONE_AND_ABOVE"}
              onChange = {()=> dispatch({type : "RATING", payload : "ONE_AND_ABOVE"})}
              />
            </label>
            1 stars & above
          </div>
        </div>

        <div className="space__2rem"></div>
        <div className="filter__type">
          <h3>Sort by</h3>
          {/* <!-- Milkyway UI Radio Input --> */}
          <div className="radio">
            <label for="radio-1">
              <input type="radio" 
              name="price-radio" 
              className="radio__input" 
              checked = {state.sortByPrice === "PRICE_LOW_TO_HIGH"}
              onChange = {()=> dispatch({type : "SORT", payload : "PRICE_LOW_TO_HIGH"})}
              />
            </label>
            Price - Low to High
          </div>
          <div className="radio">
            <label for="radio-1">
              <input type="radio" 
              name="price-radio" 
              className="radio__input" 
              checked = {state.sortByPrice === "PRICE_HIGH_TO_LOW"}
              onChange = {()=> dispatch({type : "SORT", payload : "PRICE_HIGH_TO_LOW"})}
              />
            </label>
            Price - High to Low
          </div>
        </div>
      </aside>
    </>
  );
}
