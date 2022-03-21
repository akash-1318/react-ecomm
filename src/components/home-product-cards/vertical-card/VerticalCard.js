import { useProductContext } from "../../../contexts/product-context";
import {Link} from 'react-router-dom'

export default function VerticalCard() {
  const {state, dispatch} = useProductContext()
  const {products} = state
  const slicedProdcuts = products.slice(2,4)

  return (
    <div>
      <div className="space__3rem"></div>
      <h1 className="category__heading">NEW ARRIVALS</h1>
      <div className="arrival__collection">
        {/* <!-- Milkyway UI Horizontal Card --> */}
        {slicedProdcuts.map((item) => {
          return (
            <Link to="/products" className="link__style">
            <div className="card card__cs"
            onClick = {() => dispatch({type : "ARRIVAL_CLOTHING_TYPE", payload : item.category.productType})}
            >
              <div className="card__container card__container-horizontal">
                <div className="card__img card__img--cs">
                  <img src={item.image} alt="card-img" className="card__img-c cs" />
                </div>
                <div className="card__name name__cs">
                  <p className="card__charc-name">{item.arivalText}</p>
                  <div>
                    <p className="card__charc-series">{item.collection}</p>
                    <p className="card__desc-text">{item.text}</p>
                  </div>
                </div>
              </div>
            </div>
            </Link>
          );
        })}
        <div className="space__2rem"></div>
      </div>
    </div>
  );
}
