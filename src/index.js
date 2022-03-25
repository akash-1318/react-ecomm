import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ProductContextProvider } from "../src/contexts/product-context";
import { WishlistProvider } from "../src/contexts/wishlist-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <WishlistProvider>
        <ProductContextProvider>
          <App />
        </ProductContextProvider>
      </WishlistProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
