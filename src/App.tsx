import { BrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
// import Experiencie from "./components/Experience";
// import Feedbacks from "./components/Feedbacks";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Tech from "./components/Tech";
import Works from "./components/Works";
// import StarsCanvas from "./components/StarsCanvas";
import { LanguageProvider } from "./components/LanguageContext";

const App = () => {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <NavBar />
            <Hero />
          </div>
          <About />
          {/* <Experiencie /> */}
          <Tech />
          <Works />
          {/* <Feedbacks /> */}
          <div className="relative z-0">
            <Contact />
            {/* <StarsCanvas /> */}
          </div>
        </div>
      </LanguageProvider>
    </BrowserRouter>
  );
};

export default App;
