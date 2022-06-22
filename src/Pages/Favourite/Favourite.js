import {Link} from 'react-router-dom'
import { useState,useContext,useEffect } from "react";
import { setFavProductsContext } from "../SharedLayout/SharedLayout";
import styles from './Favourite.module.scss';

const Favourite = () => {
  const {favProducts,setFavProducts} = useContext(setFavProductsContext)

  const removeItem = (id)=>{
    setFavProducts((favProducts)=>{
       return favProducts.filter((favProduct)=>favProduct.id !== id)
    })
  }
  
    return(
        <main className={styles.favouriteSection}>
          <h1>Favourite Product</h1>
          
          {
            favProducts.length === 0 ?
            <h1>No favourite products</h1>
          :
            
           <div  className={styles.favProductsListContainer}> 
            {
            favProducts.map((item)=>{
              return (
                <div key={item.id} className={styles.favProductContainer}>
                  <h1>{item.title}</h1>
                  <img src={item.image} alt={item.title}/>
                  <button onClick={()=>removeItem(item.id)}><h3>Remove</h3></button>
                  <Link to={`/products/${item.id}`}><h3>Read More</h3></Link>
                </div>
              )
            })
            }
            </div>
            }
          
          <Link to='/'><h3>Back Home</h3></Link>  
          
        </main>
    )
}

export default Favourite