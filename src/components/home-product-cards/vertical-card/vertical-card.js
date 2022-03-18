import axios from "axios";
import { useState, useEffect } from "react";

export default function VerticalCard() {
  const [productData, setProductData] = useState([]);
  const getProdData = async () => {
    try {
      const resp = await axios.get("/api/products");
      console.log(resp.data.products);
      const serverData = resp.data.products;
      const arrivalData = serverData.filter((item) => item.blonging);
      setProductData(arrivalData);
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
      <h1 class="category__heading">NEW ARRIVALS</h1>
      <div class="arrival__collection">
        {/* <!-- Milkyway UI Horizontal Card --> */}
        {productData.map((item) => {
          return (
            <div class="card card__cs">
              <div class="card__container card__container-horizontal">
                <div class="card__img card__img--cs">
                  <img src={item.image} alt="card-img" class="card__img-c cs" />
                </div>
                <div class="card__name name__cs">
                  <p class="card__charc-name">{item.arivalText}</p>
                  <div>
                    <p class="card__charc-series">{item.collection}</p>
                    <p class="card__desc-text">{item.text}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div class="space__2rem"></div>
      </div>
    </div>
  );
}
