import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function About() {
  useEffect(() => {
    const sectionHeroEl = document.querySelector(".container1");

    const obs = new IntersectionObserver(
      function (entries) {
        const ent = entries[0];

        if (ent.isIntersecting === false) {
          document.querySelector(".navbar").classList.add("sticky");
        }

        if (ent.isIntersecting === true) {
          document.querySelector(".navbar").classList.remove("sticky");
        }
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "-80px",
      }
    );

    obs.observe(sectionHeroEl);

    // Clean up observer
    return () => {
      obs.disconnect();
    };
  }, []);

  return (
    <motion.div
      className="About"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <main>
        <div class="container1 ">
          <div class="navbar  ">
            <div class="navlogo">
              <Link to="/">
                <img class="logo" src="img/Ten.png" alt="logo" />
              </Link>
            </div>
            <div class="navbox ">
              <div class="homenav">
                <Link to="/">HOME</Link>
              </div>
              <div class="worknav">
                <Link to="/Work">WORKS</Link>
              </div>
            </div>
          </div>
          <div class="aboutbox">
            <div class="main-container">
              <div class="texbox">
                <h1>Ten</h1>
                <p>フロントエンドエンジニアを目指している</p>
              </div>
            </div>
            <div class="arrowbox">
              <img class="arrowimg" src="img/down-arrow.png" alt="arrowimga" />
            </div>
          </div>
        </div>
        <div class="container2">
          <div class="c2box">
            <div class="c2text1">
              <h1>About</h1>
              <p>
                こんにちは、ヨです。台湾出身です。普段友達は私のことをTenと呼ばれている。
                幼い頃からパソコンに興味があり、高校時代から、友人と一緒にゲームを作ったり。それ以来、プログラミングに興味を持ち、デザインも好きになって。その両方の技術をもっと勉強したいために、日本への留学を決めた。
              </p>
              <p>
                <br></br>
                Hello, my name is Yo. I am from Taiwan. My friends usually call
                me Ten. I have been interested in computers since I was very
                young, and since high school, I have been making games with my
                friends. Since then, I got interested in programming and I also
                like designing. So I decided to study in Japan to learn more
                about both of those skills.
              </p>
            </div>
            <div class="c2text2">
              <h1>Skill</h1>
              <p>
                HTML/CSS/React/Javascript/Photoshop/Illustrator/Figma/Rhino7/ZBrush
              </p>
              <h1 class="contact">Contact</h1>
              <ul>
                <li>
                  <a href="https://github.com/Teennss">
                    <ion-icon name="logo-github"> </ion-icon>
                  </a>
                </li>
                <li>
                  <ion-icon name="mail-outline"></ion-icon>
                </li>
                <li>
                  <ion-icon name="call-outline"></ion-icon>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
}

export default About;
