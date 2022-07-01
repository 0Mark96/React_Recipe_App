import React from "react";
import { useContext } from "react";
import { RecipeDataContext } from "../SharedLayout/SharedLayout";
import { loadingProductsContext } from "../SharedLayout/SharedLayout";
import Card from "../../Components/CardProduct/Card";
import styles from './Products.module.scss';


const ProductsList = ()=>{
    
    const {recipes} = useContext(RecipeDataContext) // recipes data
    const {loadingProducts}=useContext(loadingProductsContext) // loading while fetch products
    
     return (
     <main className={styles.productsListContainer}>
        { 
        loadingProducts ? 
             <h1>..Loading</h1>
             : 
             recipes.length !== 0 ?
                     recipes.map((item)=>{
                         return <Card item={item} key={item.id}/>
                     })
                     :
                     <h1>Sorry No result found</h1>
        }
     </main> 
    )
};

export default ProductsList