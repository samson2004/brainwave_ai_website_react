import Header from "./components/header";
import Hero from "./components/hero";
import Benefits from "./components/featuresection";
import Collabaration from "./components/collabaration";
import Services from "./components/services";
import Pricing from "./components/pricing";
import Roadmap from "./components/roadmap";
import Footer from "./components/footer";
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collabaration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
    </>
  );
};

export default App;
