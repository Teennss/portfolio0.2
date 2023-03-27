import React, { useState, useCallback, useRef, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";

import styles from "./styles.module.css";

export default function Ten() {
  const ref = useRef([]);
  const [items, set] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: "perspective(600px) rotateX(0deg)",
      color: "#c9ffc5",
    },
    enter: [
      {
        opacity: 1,
        height:
          width >= 1290
            ? 120
            : width >= 970
            ? 100
            : width >= 650
            ? 80
            : width >= 430
            ? 70
            : 50,
        innerHeight:
          width >= 1290
            ? 120
            : width >= 970
            ? 100
            : width >= 650
            ? 80
            : width >= 430
            ? 70
            : 50,
      },
      { transform: "perspective(600px) rotateX(180deg)", color: "#b8f2e6" },
      { transform: "perspective(600px) rotateX(0deg)" },
    ],
    leave: [
      { color: "#fff1b7" },
      { innerHeight: 0 },
      { opacity: 0, height: 0 },
    ],
    update: { color: "#faf3dd" },
  });

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(setTimeout(() => set(["こんにちは", "Hello"]), 2000));
    ref.current.push(
      setTimeout(() => set(["Tenster", "ポートフォリオ", "Website"]), 5000)
    );
    ref.current.push(setTimeout(() => set(["ようこそ", "Welcome"]), 8000));
  }, []);

  useEffect(() => {
    reset();
    return () => ref.current.forEach(clearTimeout);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {transitions(({ innerHeight, ...rest }, item) => (
          <animated.div
            className={styles.transitionsItem}
            style={rest}
            onClick={reset}
          >
            <animated.div style={{ height: innerHeight }}>{item}</animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  );
}
