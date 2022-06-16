import React from "react";
import {Link} from 'react-router-dom'
import { useContext } from "react";
import { RecipeDataContext } from "../SharedLayout/SharedLayout";
import styles from './Products.module.scss'
import imgNotFound from '../../Assets/Img/image-not-found.png'
import PropTypes from 'prop-types'

const ProductsList = ()=>{
    let data = useContext(RecipeDataContext)
    if(data.length !== 0) {
    return (
        <main className={styles.productsListContainer}>
            {
            data.map((item)=>{
                const id = item.id.toString()
                   return <div className={styles.productContainer} key={item.id}>
                            <h1>{item.title || 'No title'}</h1>
                            <img src={item.image || imgNotFound} alt='recipe image'></img>
                            <Link to={id}><h3>Read More</h3></Link>
                          </div>
            }) 
            }
        </main> 
        )
    }else{
        return(
          <div className={styles.noResults}>
              <h1>Sorry no results found !</h1>
          </div>
        )
    }
}



export default ProductsList