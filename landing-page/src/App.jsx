import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero"
import Services from "./components/Services";
import About from "./components/About";
import CallToAction from "./components/CallToAction";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SocialMedia from "./components/SocialMedia";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="font-sans">
        <Header />
        <main>
          <Hero />
          <div>
            <Services />
          </div>
          <div>
            <About />
          </div>
          <div>
            <CallToAction />
          </div>
          <div>
            <Testimonials />
          </div>
          <div>
            <Contact />
          </div>
        </main>
        <SocialMedia />
        <Footer />
      </div>
    </>
  );
}

export default App;
