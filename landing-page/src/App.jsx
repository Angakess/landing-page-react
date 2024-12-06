import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero"
import Services from "./components/Services";

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
        </main>
      </div>
    </>
  );
}

export default App;
