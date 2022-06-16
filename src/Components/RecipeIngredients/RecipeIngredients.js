import React from 'react';
import styles from './RecipeIngredients.module.scss';

const RecipeIngredients = ({ingredients}) => {

  return <div className={styles.ingrOuterContainer}>
            <h1>Ingredients</h1>
            <ul className={styles.ingredientsList}>
            {
                ingredients ? 
                ingredients.map((item)=>{
                    return <li key={item.id.toString()}>{item.original || 'No ingredient found'}</li>     
                })
                :
                'No ingredients found'
            }
            </ul>
         </div>   
};

export default RecipeIngredients