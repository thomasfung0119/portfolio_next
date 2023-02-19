import React from "react";
import styles from './Expertise.module.css';
import HoverCard from "@/components/Cards/HoverCard";

import { BiCodeAlt, BiAtom, BiDollarCircle, BiMoviePlay } from "react-icons/bi";

import { FormattedMessage, useIntl } from "react-intl";
function Expertise() {
  const intl = useIntl();
  return (
    <div className={styles.Expertise} id="Expertise">
        <div>
          <h2><FormattedMessage id="page.expertise.title" /></h2>
        </div>

        <div className={styles.CardList}>
          <HoverCard 
            IconComponent = {<BiCodeAlt/>}
            title = {<FormattedMessage id="page.expertise.frontendTitle" />}
            paragraph = {<FormattedMessage id="page.expertise.frontendContent" />}
          />
          <HoverCard 
            IconComponent = {<BiAtom/>}
            title = {<FormattedMessage id="page.expertise.backendTitle" />}
            paragraph = {<FormattedMessage id="page.expertise.backendContent" />}
          />
          <HoverCard 
            IconComponent = {<BiDollarCircle/>}
            title = {<FormattedMessage id="page.expertise.quantTitle" />}
            paragraph = {<FormattedMessage id="page.expertise.quantContent" />}
          />
        </div>
    </div>
  );
}

export default Expertise;