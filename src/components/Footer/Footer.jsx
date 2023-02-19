import React from "react";
import styles from './Footer.module.css';
import { FormattedMessage, useIntl } from "react-intl";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

function Footer() {
  const intl = useIntl();
  return (
    <div className={styles.Footer}>
        <footer>
            <div className={styles.waves}>
                <div className={styles.wave} id="wave1" />
                <div className={styles.wave} id="wave2" />
                <div className={styles.wave} id="wave3" />
                <div className={styles.wave} id="wave4" />
            </div>
            <ul className={styles.socialIcon}>
                <li><a href="https://www.linkedin.com/in/thomaskkfung/" target="_blank"><AiFillLinkedin /></a></li>
                <li><a href="https://github.com/thomasfung0119" target="_blank"><AiFillGithub /></a></li>
            </ul>
            <p><FormattedMessage id="page.footer.copyright" /></p>
        </footer>
    </div>
  );
}

export default Footer;