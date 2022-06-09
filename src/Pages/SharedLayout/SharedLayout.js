import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { createContext } from "react";

export const RecipeDataContext = createContext() //recipe data to pass in products
export const setRecipesContext = createContext() // pass the setRecipe in searchRecipe 

const SharedLayout = () => {
    const [recipes,setRecipes]= useState([])
    return(
        <>
        {/* Passing the setRecipes to the form in searchRecipe file */}
        <setRecipesContext.Provider value={{recipes,setRecipes}}>
            <Header/>                                             
        </setRecipesContext.Provider>
       
        {/* Passing recipe data to all the page*/}
        <RecipeDataContext.Provider value={recipes}>
            <Outlet />
        </RecipeDataContext.Provider>
        
            <Footer />
        </>
    )
}

export default SharedLayout