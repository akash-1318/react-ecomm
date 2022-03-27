import "./home.css";
import { Navigation } from "../../components/navigation/navigation";
import Hero from "../../components/homepage-hero-container/hero";
import { HorizontalCard } from "../../components/home-product-cards/horizontal-card/horizontal";
import VerticalCard from "../../components/home-product-cards/vertical-card/VerticalCard";
import { useProductContext } from "../../contexts/product-context";
import { Link } from "react-router-dom";

export default function Home() {
  const { state, dispatch } = useProductContext();
  const { products } = state;
  const homeProducts = products.filter((item) => item.homeVisibility);

  return (
    <>
      <Navigation />
      <Hero />
      <HorizontalCard />
      <VerticalCard />
    </>
  );
}
