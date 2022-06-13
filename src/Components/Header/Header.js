import React from "react";
import {Link} from 'react-router-dom';
import SearchRecipe from "./SearchRecipe/SearchRecipe";
import styles from './Header.module.scss'
import logo from '../../Assets/Img/Veg-Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeartCirclePlus} from '@fortawesome/free-solid-svg-icons'



const Header = ()=>{

    return(
        <header className={styles.header}>
            <img src={logo}/>
               <SearchRecipe />
           <Link to='favourite'><h2>Favourite</h2><FontAwesomeIcon icon={faHeartCirclePlus} size='xl' /></Link>
        </header>
    )
}

export default Header