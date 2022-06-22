import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { createContext } from "react";

export const RecipeDataContext = createContext() //recipe data to pass in products
export const setFavProductsContext = createContext()  // passa fav product to favourite
export const loadingProductsContext = createContext() // loading spinner

const SharedLayout = () => {
    const [recipes,setRecipes]= useState([])
    const [loadingProducts,setLoadingProducts] = useState(true)

    // setup favProducts in Local Storage and create context
    const [favProducts,setFavProducts]=useState(()=>{
        const initialValue = JSON.parse(localStorage.getItem('products'));
        return initialValue || []; 
        })
     useEffect(()=>{
        localStorage.setItem('products',JSON.stringify(favProducts))
      },[favProducts])
    //---------------------------

    return(
        <>
    <RecipeDataContext.Provider value={{recipes,setRecipes}} >
    <loadingProductsContext.Provider value={{loadingProducts,setLoadingProducts}}>
    <setFavProductsContext.Provider value = {{favProducts,setFavProducts}}>
     
        <Header/>                                             
        <Outlet/>
  
    </setFavProductsContext.Provider>           
    </loadingProductsContext.Provider> 
    </RecipeDataContext.Provider>  
        
        <Footer />
        </>
    )
}

export default SharedLayout