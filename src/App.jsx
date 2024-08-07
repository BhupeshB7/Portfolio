import React, { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import IntelliTicksChatbot from "./components/IntelliTicksChatbot";
import ScrollProgressBar from "./components/ScrollProgressBar";
import AboutS from "./components/pages/components/AboutS";
const About = lazy(() => import("./components/pages/About"));
const App = () => {
  return (
    <div>
      <ScrollProgressBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <Suspense fallback={<AboutS/>}>
                <About />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
      <IntelliTicksChatbot />
    </div>
  );
};

export default App;
