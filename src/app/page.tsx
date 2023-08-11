import {
  Benefits,
  FaqSection,
  Hero,
  Projects,
  Testimonials,
  TrustedBy,
  Why,
} from "./sections";
import { Comparison } from "./sections/Comparison";
import Products from "./sections/Products/Products";

const Home = () => {


  return (
    <main className=" min-h-screen ">
      <Hero />
      <TrustedBy />
      <Benefits />
      <Comparison />
      <Why />
      <Projects />
      <Products />
      {/* <Testimonials /> */}
      <FaqSection />
    </main>
  );
};

export default Home;
