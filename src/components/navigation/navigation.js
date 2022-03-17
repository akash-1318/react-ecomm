import './navigation.css'
import galaxy from '../../assets/images/galaxy.png'

export default function Navigation() {
  return (
    <div>
      <header class="header">
        <div class="header__nav-left">
          <img src={galaxy} alt="logo" />
          <p class="logo__name">Milkyway</p>
        </div>

        <div class="category__section">
          <p>Men</p>
          <p>Women</p>
          <p>Kids</p>
          <p>Home & Living</p>
        </div>

        <div class="header__nav-middle">
          <div class="search__icon">
            <i class="bx bx-search-alt-2"></i>
          </div>
          <input placeholder="search" class="header__search" />
        </div>

        <div class="header__nav-right">
          <div class="header__icons">
            <button class="btn solid__primary">Login</button>
            <div class="icon__badge">
              <i class="bx bx-heart"></i>
              <span class="badge__content">5</span>
            </div>

            <div class="icon__badge">
              <i class="bx bxs-cart-alt"></i>
              <span class="badge__content">2</span>
            </div>

            <p class="cart__text">Cart</p>
          </div>
        </div>
      </header>
    </div>
  );
}
