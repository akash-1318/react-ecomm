import "./home.css";
import Navigation from "../../components/navigation/Navigation";
import Hero from "../../components/homepage-hero-container/hero";
import HorizontalCard from '../../components/home-product-cards/horizontal-card/Horizontal'
import VerticalCard from '../../components/home-product-cards/vertical-card/VerticalCard'
export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <HorizontalCard/>
      <VerticalCard/>
    </>
  );
}
