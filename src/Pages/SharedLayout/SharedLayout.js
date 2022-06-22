import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { createContext } from "react";

export const RecipeDataContext = createContext() //recipe data to pass in products
export const setRecipesContext = createContext() // pass the setRecipe in searchRecipe 
export const setFavProductsContext = createContext()  // passa fav product to favourite
export const loadingProductsContext = createContext() // loading spinner

const SharedLayout = () => {
    const [recipes,setRecipes]= useState([])
    const [favProducts,setFavProducts]=useState(()=>{
        const initialValue = JSON.parse(localStorage.getItem('products'));
        return initialValue || []; 
        })
    const [loadingProducts,setLoadingProducts] = useState(true)

     useEffect(()=>{
        localStorage.setItem('products',JSON.stringify(favProducts))
      },[favProducts])

    return(
        <>
    <loadingProductsContext.Provider value={{loadingProducts,setLoadingProducts}}>
        {/* Passing the setRecipes to the form in searchRecipe file */}
        <setRecipesContext.Provider value={{recipes,setRecipes}}>
            <Header/>                                             
        </setRecipesContext.Provider>
       
        {/* Passing recipe data to all the page*/}
        <RecipeDataContext.Provider value={recipes} >

                <setFavProductsContext.Provider value = {{favProducts,setFavProducts}}>
                   <Outlet/>
                </setFavProductsContext.Provider>           
            

        </RecipeDataContext.Provider>
    </loadingProductsContext.Provider>   
            <Footer />
        </>
    )
}

export default SharedLayout