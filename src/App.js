import "./App.css";
import Home from "./pages/home/Home";
import ProductListing from "./pages/products-page/ProductListing";
import MockMan from "mockman-js";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/mock" element={<MockMan />}></Route>
      </Routes>
    </div>
  );
}

export default App;
