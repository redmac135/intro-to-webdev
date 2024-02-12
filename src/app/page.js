"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const NAME = "Ethan";

  const [count, setCount] = useState(0);
  const [name, setName] = useState(NAME);

  function handleClick() {
    setCount(count + 1);
    setName(name + "n");
  }

  function resetCount() {
    setCount(0);
    setName(NAME);
  }

  return (
    <main>
      <section className={styles.wrapper}>
        <h1>Hey, my name's {name}</h1>
        <p className={styles.count}>{count}</p>
        <div className={styles.button_set}>
          <button className={styles.button} onClick={handleClick}>
            Click Me
          </button>
          <button className={styles.button} onClick={resetCount}>
            Reset
          </button>
        </div>
      </section>
    </main>
  );
}
