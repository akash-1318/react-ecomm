import "./home.css";
import Navigation from "../../components/navigation/navigation";
import Hero from "../../components/homepage-hero-container/hero";
import HorizontalCard from '../../components/home-product-cards/horizontal-card/horizontal'
import VerticalCard from '../../components/home-product-cards/vertical-card/vertical-card'
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
