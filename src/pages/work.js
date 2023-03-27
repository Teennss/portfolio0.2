import React from "react";
import { Link } from "react-router-dom";
import Card from "../CardAnimation/Card";
import { motion } from "framer-motion";

function Work() {
  return (
    <motion.div
      className="Work"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
    >
      <div class="navbar">
        <div class="navlogo">
          <Link to="/">
            <img class="logo" src="img/Ten.png" alt="logo" />
          </Link>
        </div>
        <div class="navbox">
          <div class="homenav">
            <Link to="/">HOME</Link>
          </div>
          <div class="aboutnav">
            <Link to="/About">About</Link>
          </div>
        </div>
      </div>
      <Card />
    </motion.div>
  );
}
export default Work;
