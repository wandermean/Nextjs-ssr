import React from "react";
import Link from "next/link";
import Header from "../components/Header";
import styles from "./style.less";

const Home = () => (
  <div>
    <Header title="Home" />
    <div className={styles.test}>111</div>
  </div>
);

export default Home;
