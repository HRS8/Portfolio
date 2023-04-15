import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <StarsCanvas />
      <div className="relative z-0 flex flex-col ">
        <div className="bg-center bg-no-repeat bg-cover">
          <Navbar />
          <Hero />
        </div>
        <div className="px-auto">
          <StarsCanvas />
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
