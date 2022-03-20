import "./hero.css";
import {Link} from 'react-router-dom'
export default function Hero() {
  return (
    <div>
      <div className="space__3rem"></div>
      <div className="scroll__bar">
        <div className="offer__text">
          <p className="primary__text">Milkyway Sale</p>
          <p className="secondry__text">Offers you will fall in love with</p>
          <p className="sale__text">40-70% off</p>
          <hr />
          <div className="explore__text">
            {/* <!-- Milkyway UI Button --> */}

            <Link to="/products"><button className="btn solid__primary">Explore+</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
