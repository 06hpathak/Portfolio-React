import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Harsh Pathak</h1>
        <p className={styles.description}>
        I'm a Software Developer with experience of multiple interships and a job using React, Django, SQL and basic web developement tools such as HTML, CSS and JavaScript.Reach out if you'd like to know more about me!
        </p>
        <a href="mailto:06hpathak@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/Harsh.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
