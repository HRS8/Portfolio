import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 flex flex-col bg-black'>
        <div className='bg-center bg-no-repeat bg-cover bg-hero-pattern'>
          <Navbar />
          <Hero />
        </div>
        <div className="pl-8">
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
        </div>
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
