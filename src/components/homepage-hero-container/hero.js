import "./hero.css";
import {Link} from 'react-router-dom'
export default function Hero() {
  return (
    <div>
      <div class="space__3rem"></div>
      <div class="scroll__bar">
        <div class="offer__text">
          <p class="primary__text">Milkyway Sale</p>
          <p class="secondry__text">Offers you will fall in love with</p>
          <p class="sale__text">40-70% off</p>
          <hr />
          <div class="explore__text">
            {/* <!-- Milkyway UI Button --> */}

            <Link to="/products"><button class="btn solid__primary">Explore+</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
