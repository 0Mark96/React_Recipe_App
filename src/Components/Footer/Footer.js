import React from "react";
import styles from './Footer.module.scss'


const Footer = ()=>{
    return(
        <footer  className={styles.footer}>
            <div className={styles.projectInfo}>
             <h2>Author: Marco Verardi</h2>
             <h2>Project for Start2Impact</h2>
             <h2>Project Date: 2022</h2>
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