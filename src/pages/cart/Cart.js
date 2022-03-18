import "./cart.css";
import Navigation from "../../components/navigation/Navigation";
import DetailCard from "../../components/detailed-card/DetailCard";
import PriceDetail from "../../components/price-detail/PriceDetail";
export default function Cart() {
  return (
    <div>
      <Navigation />
      <div className="mycart__main-container">
        <h1 className="mycart__main-heading">My Cart (2)</h1>
        <div className="mycart__product">
          <div className="card__container">
            <DetailCard />
          </div>
          <PriceDetail />
        </div>
      </div>
    </div>
  );
}
