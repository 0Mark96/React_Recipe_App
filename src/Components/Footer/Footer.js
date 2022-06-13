import React from "react";
import styles from './Footer.module.scss'


const Footer = ()=>{
    return(
        <footer  className={styles.footer}>
            <div className={styles.projectInfo}>
             <h3>Author: Marco Verardi</h3>
             <h3>Project for Start2Impact</h3>
             <h3>Project Date: 2022</h3>
            </div>
            <div className={styles.socialLinks}>
             <h2>Social Links</h2>
             <div className={styles.links}>
                <i className="fa-brands fa-linkedin-in"></i>
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-github"></i>
                <i className="fa-brands fa-instagram"></i>
            </div>
            </div>
        </footer>
    )
}

export default Footer