import Header from "./components/Header";
import Hero from "./components/Hero";
import OurServices from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero />
        <OurServices />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
