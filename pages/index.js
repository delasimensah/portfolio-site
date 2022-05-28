//components
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Details from "../components/Details/Details";
import Technologies from "../components/Technologies/Technologies";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <About />
      <Technologies />
      <Details />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
