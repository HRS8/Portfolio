import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <StarsCanvas className="z-10"/>
      <div className="relative z-0 flex flex-col ">
        <div className="bg-center bg-no-repeat bg-cover bg-hero-pattern">
          <Navbar />
          <Hero />
        </div>
        <div className="px-auto">
          <About />
          <Experience />
          <Works />
          <Feedbacks />
        </div>
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
