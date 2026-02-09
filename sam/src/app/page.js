import Header from "./components/Header";
import Hero from "./components/Hero";
import OurServices from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  //home
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero />
        <OurServices />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
