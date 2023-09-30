import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <StarsCanvas className="z-10"/>
      <div className="relative z-0 flex flex-col ">
        <div className="bg-center bg-[#100d1a] border-b-[40px] border-[#0c0914] bg-no-repeat bg-cover bg-hero-pattern">
          <Navbar />
          <Hero />
        </div>
        <div className="px-auto">
          <div className="border-b-[40px] border-t-[40px] border-[#07060c]">
          <About />
          </div>
          <div className="bg-[#100d1a] border-t-[40px] border-b-[40px] border-[#0c0914]">
          <Experience />
          <Works />
          <Feedbacks />
          </div>
        </div>
        <div className="relative border-b-[40px] border-t-[40px] border-[#07060c] z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
