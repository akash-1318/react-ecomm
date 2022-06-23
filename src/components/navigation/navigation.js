import "./navigation.css";
import { Link, useNavigate } from "react-router-dom";
import { useProductContext } from "../../contexts/product-context";
import { useWishContext } from "../../contexts/wishlist-context";
import { useCartContext } from "../../contexts/cart-context";
import { useAuthContext } from "../../contexts/auth-context";
import {toast} from "react-toastify"

function Navigation() {
  const navigate = useNavigate();
  const { authCred, setAuthCred } = useAuthContext();
  const { dispatch } = useProductContext();
  const { wishState } = useWishContext();
  const { cartState } = useCartContext();
  const { cartProducts } = cartState;
  const qunatityReducer = (previousProd, currentProd) =>
    currentProd.qty + previousProd;
  const cartProductQuantity = cartProducts.reduce(qunatityReducer, 0);

  const navNavigation = (type) => {
    type === "wishlist"
      ? authCred.authStatus
        ? navigate("/wishlist")
        : navigate("/login")
      : authCred.authStatus
      ? navigate("/cart")
      : navigate("/login");
  };

  const logout = () => {
    localStorage.clear();
    setAuthCred({ ...authCred, authToken: null, authStatus: false });
    navigate("/");
    toast.success("You have logged out")
  };

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
          <Link
            to="/products"
            className="nav__link-style"
            onClick={() => dispatch({ type: "CLOTHING_TYPE", payload: "Men" })}
          >
            <p>Men</p>
          </Link>
          <Link
            to="/products"
            className="nav__link-style"
            onClick={() =>
              dispatch({ type: "CLOTHING_TYPE", payload: "Women" })
            }
          >
            <p>Women</p>
          </Link>
          <Link
            to="/products"
            className="nav__link-style"
            onClick={() => dispatch({ type: "CLOTHING_TYPE", payload: "Kids" })}
          >
            <p>Kids</p>
          </Link>
          <Link to="/products" className="nav__link-style"
          onClick={() => dispatch({type : "ALL_TYPE", payload : ""})}
          >
            <p>All</p>
          </Link>
        </div>

        <div className="header__nav-right">
          <div className="header__icons">
            {authCred.authStatus ? (
              <>
                <button class="btn solid__primary logout__btn" onClick={logout}>
                  Log Out
                </button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="btn solid__primary">Login</button>
                </Link>
              </>
            )}
            <div
              className="icon__badge"
              onClick={() => navNavigation("wishlist")}
            >
              <i className="bx bx-heart"></i>
              <span className="badge__content">
                {authCred.authStatus ? wishState.wishlistProducts.length : 0}
              </span>
            </div>

            <div className="icon__badge" onClick={() => navNavigation("cart")}>
              <i className="bx bxs-cart-alt"></i>
              <span className="badge__content">
                {authCred.authStatus ? cartProductQuantity : 0}
              </span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export { Navigation };
