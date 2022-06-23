import "./App.css";
import Home from "./pages/home/home";
import ProductListing from "./pages/products-page/ProductListing";
import Wishlist from "./pages/wishlist/Wishlist";
import Cart from "./pages/cart/Cart";
import Login from "./pages/login-page/Login";
import SignUp from "./pages/signup-page/SignUp";
import MockMan from "mockman-js";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={1000} style={{fontSize : "1.5rem"}} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/mock" element={<MockMan />}></Route>
      </Routes>
    </div>
  );
}

export default App;
