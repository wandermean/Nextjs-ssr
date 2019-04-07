import React from "react";
import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";
import styles from "./style.less";

const Home = () => (
  <div>
    <Head title="Home" />
    <Nav />
    <div className={styles.test}>111111111</div>
  </div>
);

export default Home;
