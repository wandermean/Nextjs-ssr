import React, { PureComponent, Fragment } from "react";
import Link from "next/link";
import styles from "./style.less";

class Header extends PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <Link prefetch href="/">
          <a className={styles.item}>首页</a>
        </Link>
        <button onClick={()=>alert(1)}>aa</button>
        {/* {login ? (
          <Fragment>
            <Link to="/translation" className={styles.item}>
              翻译列表
            </Link>
            <div onClick={handleLogout} className={styles.item}>
              退出
            </div>
          </Fragment>
        ) : (
          <div onClick={handleLogin} className={styles.item}>
            登陆
          </div>
        )} */}
      </div>
    );
  }
}

export default Header;
