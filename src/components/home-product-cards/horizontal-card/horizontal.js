import { useEffect, useState } from "react";
import axios from "axios";
// import { productCard } from "../../../backend/db/products";

export default function HorizontalCard() {
  const [productData, setProductData] = useState([]);
  const getProdData = async () => {
    try {
      const resp = await axios.get("/api/products");
      console.log(resp);
      setProductData(resp.data.products);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProdData();
  }, []);

  return (
    <div>
      <div class="space__3rem"></div>
      <div class="space__3rem"></div>
      <h1 class="category__heading">DEALS ON TOP BRANDS</h1>
      <div class="main__card-container">
        {/* <!-- Milkyway UI Card --> */}
        {productData.map((item) => {
          return (
            <div class="card">
              <div class="card__container">
                <div class="card__img">
                  <img src={item.image} alt="card-img" class="card__img-c" />
                </div>
                <div class="card__name">
                  <p class="card__charc-name">{item.title}</p>
                  <p class="card__charc-series">Up To {item.discount} Off</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
