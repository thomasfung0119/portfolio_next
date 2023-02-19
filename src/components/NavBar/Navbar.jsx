import React, { useEffect, useState } from "react";
import styles from './Navbar.module.css';
import { useTheme } from 'next-themes';
import { useRouter } from "next/router";

function Navbar(props) {
  const router = useRouter();

  // Style Change Once Scrolled
  useEffect(
    function onFirstMount() {
      window.addEventListener("scroll", function () {
        const header = this.document.getElementsByClassName(styles.header)
        header[0] && header[0].classList.toggle(styles.sticky, this.window.scrollY > 0)
      });
      return () => { window.removeEventListener("scroll", null); }
  }, []);
  
  // Smooth Scrolling
  function smoothScroll(e, sec){
    e.preventDefault();
    let section = document.getElementById(sec);
    section && section.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className={styles.NavBar}>
        <header className={styles.header}>
          <a className={styles.logo}>{props.title}</a>
          <div className={styles.choices}>
            <ul>
              {
                Object.entries(props.ids)
                .map( ([key, value]) => <li><a onClick={e => smoothScroll(e, key)}>{value}</a></li> )
              }
            </ul>
            <span className={styles.translationlink}>{props.translationLink[router.locale]}</span>
            <span className={styles.themebutton}>{props.themeButton[props.theme]}</span>
          </div>
        </header>
    </div>
  );
}

export default Navbar;