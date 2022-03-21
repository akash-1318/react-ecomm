import "./hero.css";
import {Link} from 'react-router-dom'
import { useProductContext } from "../../contexts/product-context";
export default function Hero() {
  const {dispatch} = useProductContext()
  return (
    <div>
      <div className="space__3rem"></div>
      <div className="scroll__bar" style = {{backgroundImage : `url(${process.env.PUBLIC_URL + 'assets/images/home-page2.jpg'})` }}>
        <div className="offer__text">
          <p className="primary__text">Milkyway Sale</p>
          <p className="secondry__text">Offers you will fall in love with</p>
          <p className="sale__text">40-70% off</p>
          <hr />
          <div className="explore__text">
            {/* <!-- Milkyway UI Button --> */}

            <Link to="/products"><button className="btn solid__primary" onClick = {() => dispatch({type : "ALL_TYPE", payload : ""})}>ExploreAll+</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
