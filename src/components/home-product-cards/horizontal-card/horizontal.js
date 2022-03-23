import { useEffect, useState } from "react";
import { useProductContext } from "../../../contexts/product-context";
import {Link} from "react-router-dom"

function HorizontalCard() {
  const {state, dispatch} = useProductContext()
  const {products} = state

  const homeProducts = products.filter((item) => item.homeVisibility)

  return (
    <div>
      <div className="space__3rem"></div>
      <div className="space__3rem"></div>
      <h1 className="category__heading">DEALS ON TOP BRANDS</h1>
      <div className="main__card-container">
        {/* <!-- Milkyway UI Card --> */}
        {homeProducts.map((item) => {
          return (
            <Link to="/products" className="link__style">
            <div className="card" 
            onClick = {() => dispatch({type : "CLOTHING_TYPE", payload : item.category.productType})}
            >
              <div className="card__container">
                <div className="card__img">
                  <img src={item.image} alt="card-img" class="card__img-c" />
                </div>
                <div className="card__name">
                  <p className="card__charc-name">{item.title}</p>
                  <p className="card__charc-series">Up To {item.discount} Off</p>
                </div>
              </div>
            </div>
            </Link> 
          );
        })}
      </div>
    </div>
  );
}

export {HorizontalCard}