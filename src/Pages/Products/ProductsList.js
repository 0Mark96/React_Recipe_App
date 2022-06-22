import React from "react";
import {Link} from 'react-router-dom'
import { useContext } from "react";
import { RecipeDataContext } from "../SharedLayout/SharedLayout";
import styles from './Products.module.scss'
import imgNotFound from '../../Assets/Img/image-not-found.png'
import { loadingProductsContext } from "../SharedLayout/SharedLayout";

const ProductsList = ()=>{
    let data = useContext(RecipeDataContext)
    const {loadingProducts}=useContext(loadingProductsContext)
    
     return (
        
        <main className={styles.productsListContainer}>
       { loadingProducts ? 
        <h1>..Loading</h1>
        : 
        data.length !== 0 ?
            
            data.map((item)=>{
                const id = item.id.toString()
                   return <div className={styles.productContainer} key={item.id}>
                            <h1>{item.title || 'No title'}</h1>
                            <img src={item.image || imgNotFound} alt='recipe image'></img>
                            <Link to={`/products/${id}`}><h3>Read More</h3></Link>
                          </div>
            })
            
             :
            <h1>Sorry No result found</h1>
           }
        </main> 
       
        
        
        )
}



export default ProductsList