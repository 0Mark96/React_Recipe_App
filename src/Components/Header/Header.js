import React from "react";
import {Link} from 'react-router-dom';
import SearchRecipe from "./SearchRecipe/SearchRecipe";

const Header = ()=>{
   
    return(
        <header style={{background:'blue'}}>
            <h1>Header</h1>
               <SearchRecipe />
           <Link to='favourite'>Favourite</Link>
        </header>
    )
}

export default Header