import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import RecipeIngredients from '../../Components/RecipeIngredients/RecipeIngredients';
import RecipeInstructions from '../../Components/RecipeInstructions/RecipeInstructions';
import RecipeMainDetails from '../../Components/RecipeMainDetails/RecipeMainDetails';
import styles from './SingleRecipe.module.scss';

const SingleRecipe = () => {
    let {singleRecipeid} = useParams()
    
    const [data,setData] = useState([])
    const [instructions,setInstructions] = useState([])
    const [ingredients,setIngredients] = useState([])

    useEffect(()=>{
    const getInformation = ()=>{
    axios.get(`https://api.spoonacular.com/recipes/${singleRecipeid}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
        .then(res => {
            setData(res.data)
            setInstructions(res.data?.analyzedInstructions[0]?.steps)
            setIngredients(res.data?.extendedIngredients)
        })
        .catch(err => console.log(err))
    }
        getInformation() 
    },[])


    return(
        <main className={styles.singleRecipeContainer}>
            <div  className={styles.detailsContainer}>
              <RecipeMainDetails data={data}/>
              <RecipeIngredients ingredients = {ingredients}/> 
              <RecipeInstructions instructions = {instructions}/>
            </div>
            <Link to='/favourite'><h3>Add to favourite</h3></Link>
            <Link to='/'><h3>Back Home</h3></Link>
        </main>
    )
}

export default SingleRecipe