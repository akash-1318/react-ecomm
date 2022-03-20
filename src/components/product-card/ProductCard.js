import axios from "axios";
import { useEffect, useState } from "react";
import "./productCard.css";
import {useProductContext} from '../../contexts/product-context';
import {sortForPrice} from '../../utils/sort-and-filter/sort';
import { filterForRating, priceRangeFilter, categoryFilter } from "../../utils/sort-and-filter/filter";

export default function ProductCard() {
  
  const {state} = useProductContext()
  const {products,sortByPrice, filterByRating, priceRange, fastDelivery, arrivingSoon} = state
  const sortedData = sortForPrice(products, sortByPrice)
  const filterRating = filterForRating(sortedData, filterByRating)
  const filteredData = priceRangeFilter(filterRating, priceRange)
  const finalFilter = categoryFilter(filteredData,fastDelivery, arrivingSoon)
  return (
    <>
    {finalFilter.map((item)=>{
      return (
        <div className="card prod__card">
        <div className="card__container">
          <div className="card__img">
            <img
              src={item.image}
              alt="card-img"
              className="card__img-c prod__card-img"
            />
          </div>
          <div className="like__product">
            <i className="bx bx-heart"></i>
          </div>
          <div className="card__name prod__card-name">
            <p className="card__charc-name prod__charc-name">{item.name}</p>
            <p className="card__charc-series prod__charc-series">₹ {item.price}</p>
            <button className="btn solid__secondry prod__card-btn">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      )
    })}
    </>
  );
}