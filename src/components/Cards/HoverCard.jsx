import React from "react";
import styles from './HoverCard.module.css';

function HoverCard(props) {

    const { givenClass, clr, IconComponent, title, paragraph } = props;
    return (
        <div className={styles.Wrapper}>
            <div className={styles.HoverCard}>
                <div className={styles.content}>
                    <div className={`${styles.icon} ${styles.addColor}`} >
                        {IconComponent}
                    </div>
                    <div className={styles.text}>
                        <h3>{title}</h3>
                        <p>{paragraph}</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default HoverCard;