import React from 'react';
import styles from './RecipeMainDetails.module.scss';

const RecipeMainDetails = ({data}) => {
    
    if(data){
        const {title,image,vegetarian,vegan,glutenFree,dairyFree,readyInMinutes,servings} = data
    
        return (
    <div className={styles.mainDetailsContainer}>
        <h1>{title || 'No title'}</h1>
        <img src={image}/>
        <p>Cooking Time : <b>{readyInMinutes} min</b></p>
        <p>Servings: <b>{servings}</b></p>
           <div className={styles.info}>
              <h2>Information:</h2>
              {vegetarian && <h4>Vegetarian</h4>} 
              {vegan && <h4>Vegan</h4>} 
              {glutenFree && <h4>Gluten Free</h4>} 
              {dairyFree && <h4>Dairy Free</h4>} 
            </div>
    </div>
  )   
   }else{
        return <h1>Sorry No main details Founds !</h1>
    }
  
}

export default RecipeMainDetails