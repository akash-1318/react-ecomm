import './navigation.css'
import {Link, useNavigate} from 'react-router-dom'
import { useProductContext } from '../../contexts/product-context';
import {useWishContext} from '../../contexts/wishlist-context';
import {useCartContext} from "../../contexts/cart-context";
import {useAuthContext} from "../../contexts/auth-context"

function Navigation() {
  const navigate = useNavigate()
  const {authCred : {authToken, authStatus}} = useAuthContext()
  const {dispatch} = useProductContext()
  const {wishState} = useWishContext()
  const {cartState} = useCartContext()
  const {cartProducts} = cartState
  const qunatityReducer = (previousProd, currentProd) => currentProd.qty + previousProd
  const cartProductQuantity = cartProducts.reduce(qunatityReducer, 0)

  const navNavigation = (type) => {
    type === "wishlist" ? (authStatus ? (navigate('/wishlist')):(navigate('/login'))) : (authStatus ? (navigate('/cart')):(navigate('/login'))) 
  }

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
            {authStatus ? (
              <>
              <button class="btn solid__primary logout__btn">Log Out</button>
              </>
            ) : (
              <>
              <Link to="/login"><button className="btn solid__primary">Login</button></Link>
              </>
            )}
            <div className="icon__badge" onClick = {()=>navNavigation("wishlist")}>
              <i className="bx bx-heart"></i>
              <span className="badge__content">{wishState.wishlistProducts.length}</span>
            </div> 

            <div className="icon__badge" onClick = {()=>navNavigation("cart")}>
              <i className="bx bxs-cart-alt"></i>
              <span className="badge__content">{cartProductQuantity}</span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export { Navigation }