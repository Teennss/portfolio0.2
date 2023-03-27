import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Ten from "../Homeanimation/Ten";

function Home() {
  return (
    <motion.div
      className="Home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <div class="container">
        <div class="work">
          <Link to="/Work">
            <span>WORKS</span>
          </Link>
        </div>
        <div class="main-box">
          <Ten />
          {/* <img class="mainlogo" src="img/TEN.png" alt="logo" /> */}
        </div>
        <div class="about">
          <Link to="/About">
            <span>ABOUT</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
