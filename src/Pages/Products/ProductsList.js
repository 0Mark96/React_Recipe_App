import React from "react";
import {Link} from 'react-router-dom'
import { useContext } from "react";
import { RecipeDataContext } from "../SharedLayout/SharedLayout";
import styles from './Products.module.scss'

const ProductsList = ()=>{
    const data = useContext(RecipeDataContext)
    return (
        <main className={styles.productsListContainer}>
            {data.map((item)=>{
                const id = item.id.toString()
                   return <div className={styles.productContainer} key={item.id}>
                     <h1>{item.title}</h1>
                     <img src={item.image}></img>
                     <Link to={id}><h3>Read More</h3></Link>
                   </div>
                     
                    
            })}
        </main>
    )
}

export default ProductsList