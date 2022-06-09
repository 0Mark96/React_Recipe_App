import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'

const SingleRecipe = () => {
    let {singleRecipeid} = useParams()

    const [recipeInstructions,setRecipeInstructions] = useState([])
    const [recipeIngredients,setRecipeIngredients] = useState([])
    
    useEffect(()=>{
    const getInformation = ()=>{
    axios.get(`https://api.spoonacular.com/recipes/${singleRecipeid}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
        .then(res => {
            setRecipeInstructions(res.data.analyzedInstructions)
            setRecipeIngredients(res.data.extendedIngredients)
        })
    }
        getInformation() 
    },[])

    console.log(recipeIngredients);
    console.log(recipeInstructions);
    return(
        <main>
            <h1>Ingredient</h1>
            {
                recipeIngredients.map((item)=>{
                    return <div key={item.id.toString()}>
                        <h3>{item.name}</h3>
                        <p>{item.amount}</p>
                    </div>
                })
            }
           <h1>Instructions</h1> 
           {/* MAP INSIDE MAP AND GIVE KEY */}
           {/* {
               recipeInstructions.map((item)=>{
                   return <div key={item.steps.map((step)=> step.number)}>
                       <p>{item.steps.map((step)=>{
                           return <>{step.step}</>
                       })}</p>
                   </div>
               })
           } */}
           <Link to='/'>back Home</Link>
        </main>
    )
}

export default SingleRecipe