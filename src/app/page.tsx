import { Benefits, Faq, Hero, Projects, TrustedBy, Why } from "./sections";
import Products from "./sections/Products/Products";

const Home = () => {
  return (
    <main className="container mx-auto min-h-screen">
      <Hero />
      <TrustedBy />
      <Benefits />
      <Why />
      <Projects />
      <Products />
      <Faq/>
    </main>
  );
};

export default Home;
