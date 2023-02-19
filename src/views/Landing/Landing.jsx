import React from "react";
import Image from "next/image";
import styles from './Landing.module.css';
import loading from '../../assets/img/scrollDownMouse.gif';
import loadingDark from '../../assets/img/scrollDownMouseDark.gif';
import {useEffect} from 'react'
import Spline from '@splinetool/react-spline';
import { useTheme } from "next-themes";
import { FormattedMessage, useIntl } from "react-intl";

function Landing(props) {
  const [role, setRole] = React.useState("software developer");
  const intl = useIntl();
  // Style Change Once Scrolled
  useEffect(
    function onFirstMount() {
      window.addEventListener("scroll", function(){
        var scroll = this.document.querySelector("#scrollIcon");
        scroll.classList.toggle(styles.disappear, this.window.scrollY > 0);
      });
      return () => { window.removeEventListener("scroll", null); }
  }, []);
  
  function handleRoles() {
    switch (role){
      case "software developer":
        setRole("quantitative developer");
        break;
      case "quantitative developer":
        setRole("frontend developer");
        break;
      case "frontend developer":
        setRole("software developer");
        break;
    }
  };
  return (
    <div className={styles.Landing} id="Landing">
      <div className={styles.background}> 
        <Spline scene="https://prod.spline.design/ljO9H9m5IHTUBJgB/scene.splinecode" />
      </div>
      <div className={styles.title}>
        <h3><FormattedMessage id="page.landing.welcome" /></h3>
        <h2><FormattedMessage id="page.landing.name" /></h2>
        <h4><FormattedMessage id="page.landing.who" /> <a href="#" onClick={handleRoles} className={styles.onclickTitle}>
          {(role=="software developer")? <FormattedMessage id="page.landing.role1" />:
          (role=="frontend developer")? <FormattedMessage id="page.landing.role3" />:
          <FormattedMessage id="page.landing.role2" />}
        </a></h4>
      </div>

      <div className={styles.videoLink}>
        <h3></h3>
      </div>

      <div className={styles.scroll} id="scrollIcon">
        {
          (props.theme == 'light')?<Image src={loadingDark} alt="scroll to continue" width={60} />:<Image src={loading} alt="scroll to continue" width={60} />
        }
        
      </div>
    </div>
  );
}

export default Landing;