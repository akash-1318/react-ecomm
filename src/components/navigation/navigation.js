import './navigation.css'

export default function Navigation() {
  return (
    <div>
      <header className="header">
        <div className="header__nav-left">
          <img src="/assets/images/galaxy.png" alt="logo" />
          <p className="logo__name">Milkyway</p>
        </div>

        <div className="category__section">
          <p>Men</p>
          <p>Women</p>
          <p>Kids</p>
          <p>Home & Living</p>
        </div>

        <div className="header__nav-middle">
          <div className="search__icon">
            <i className="bx bx-search-alt-2"></i>
          </div>
          <input placeholder="search" className="header__search" />
        </div>

        <div className="header__nav-right">
          <div className="header__icons">
            <button className="btn solid__primary">Login</button>
            <div className="icon__badge">
              <i className="bx bx-heart"></i>
              <span className="badge__content">5</span>
            </div>

            <div className="icon__badge">
              <i className="bx bxs-cart-alt"></i>
              <span className="badge__content">2</span>
            </div>

            <p className="cart__text">Cart</p>
          </div>
        </div>
      </header>
    </div>
  );
}
