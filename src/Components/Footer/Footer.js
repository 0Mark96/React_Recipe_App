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
             <a href="https://www.linkedin.com/in/marco-verardi-664555150/" target='__blank'><i className="fa-brands fa-linkedin-in"></i></a>
             <a href="https://it-it.facebook.com/marco.verardi.7" target='__blank'><i className="fa-brands fa-facebook-f"></i></a>
             <a href="https://github.com/0Mark96" target='__blank'><i className="fa-brands fa-github"></i></a>
             <a href="https://www.instagram.com/marco.verardi/?hl=it" target='__blank'><i className="fa-brands fa-instagram"></i></a>
            </div>
            </div>
        </footer>
    )
}

export default Footer