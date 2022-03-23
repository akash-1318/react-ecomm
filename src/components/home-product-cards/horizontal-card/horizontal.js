import { useProductContext } from "../../../contexts/product-context";
import {Link, useNavigate} from "react-router-dom"

function HorizontalCard() {
  const {state, dispatch} = useProductContext()
  const {products} = state

  const homeProducts = products.filter((item) => item.homeVisibility)
  const navigate = useNavigate();
  return (
    <div>
      <div className="space__3rem"></div>
      <div className="space__3rem"></div>
      <h1 className="category__heading">DEALS ON TOP BRANDS</h1>
      <div className="main__card-container">
        {/* <!-- Milkyway UI Card --> */}
        {homeProducts.map((item) => {
          return (
            <div className="card" 
            onClick = {() => {
              dispatch({type : "CLOTHING_TYPE", payload : item.category.productType})
              navigate('/products')
            }}
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
          );
        })}
      </div>
    </div>
  );
}

export {HorizontalCard}


// () => dispatch({type : "CLOTHING_TYPE", payload : item.category.productType})