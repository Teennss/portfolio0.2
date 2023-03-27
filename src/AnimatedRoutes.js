import React from "react";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home";
import Work from "./pages/work";
import About from "./pages/about";

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact={true} path="/" element={<Home />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
