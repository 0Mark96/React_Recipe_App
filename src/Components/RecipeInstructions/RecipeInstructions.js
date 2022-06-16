import React from 'react';
import style from './RecipeInstructions.module.scss';

const RecipeInstructions = ({instructions}) => {

  return <div className={style.instrOuterContainer}>
            <h1>Instructions</h1>
            <ol className={style.instructionsList}>
         {
             instructions ? 
             instructions.map((item)=>{
                return <li key={item.number}>{item.step || 'Not found'}</li>
             })
            :
            'No instructions founds'
         }
         </ol>
        </div>
};

export default RecipeInstructions