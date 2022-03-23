import './navigation.css'
import {Link} from 'react-router-dom'
import { useProductContext } from '../../contexts/product-context';

function Navigation() {
  const {dispatch} = useProductContext()
  return (
    <div>
      <header className="header">
        <Link to="/">
        <div className="header__nav-left">
          <img src="/assets/images/galaxy.png" alt="logo" />
          <p className="logo__name">Milkyway</p>
        </div>
        </Link>

        <div className="category__section">
          <Link to = "/products" className = "nav__link-style" onClick = {() => dispatch({type : "CLOTHING_TYPE", payload : "Men"})}><p>Men</p></Link>
          <Link to = "/products" className = "nav__link-style" onClick = {() => dispatch({type : "CLOTHING_TYPE", payload : "Women"})}><p>Women</p></Link>
          <Link to = "/products" className = "nav__link-style" onClick = {() => dispatch({type : "CLOTHING_TYPE", payload : "Kids"})}><p>Kids</p></Link>
          <Link to = "" className = "nav__link-style"><p>Home & Living</p></Link>
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

export { Navigation }