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
      <div className="space__3rem"></div>
      <div className="space__3rem"></div>
      <h1 className="category__heading">DEALS ON TOP BRANDS</h1>
      <div className="main__card-container">
        {/* <!-- Milkyway UI Card --> */}
        {productData.map((item) => {
          return (
            <div className="card">
              <div className="card__container">
                <div className="card__img">
                  <img src={item.image} alt="card-img" class="card__img-c" />
                </div>
                <div className="card__name">
                  <p className="card__charc-name">{item.title}</p>
                  <p className="card__charc-series">Up To {item.discount} Off</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
