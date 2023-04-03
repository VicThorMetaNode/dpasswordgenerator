import { React } from "react";
import { Route, Routes } from "react-router-dom";

// IMPORT INTERNAL COMPONENTS
import { Footer, Navbar } from "./components";
import { Home } from "./pages";

const App = () => {
  return (
    <>
      <div className="relative flex flex-row h-screen ">
        <div className="flex-1 max-sm:w-full mx-auto relative z-0 ">
          <Navbar />
          {/* {toggleButton} */}
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<HowItWorks />} />
            <Route path="/lexique" element={<Lexique />} />
            <Route path="/webdev" element={<Webdev />} />
            <Route path="/bizzdev" element={<Bizzdev />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/event" element={<Event />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/medias" element={<Medias />} /> */}
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
