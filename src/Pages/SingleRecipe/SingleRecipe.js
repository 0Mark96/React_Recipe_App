import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import AddFavButton from '../../Components/AddFavButton/AddFavButton';
import RecipeIngredients from '../../Components/RecipeIngredients/RecipeIngredients';
import RecipeInstructions from '../../Components/RecipeInstructions/RecipeInstructions';
import RecipeMainDetails from '../../Components/RecipeMainDetails/RecipeMainDetails';
import styles from './SingleRecipe.module.scss';

const SingleRecipe = () => {
    let {singleRecipeid} = useParams()

    const [data,setData] = useState([])
    const [instructions,setInstructions] = useState([])
    const [ingredients,setIngredients] = useState([])
    const [loading,setLoading]=useState(true)
    const [favProdAlreadyAdd,setFavProdAlreadyAdd] = useState(false)
   
    //object for favourite page
    const favData = {
        title:data.title,
        image:data.image,
        id:data.id
    }
 
    useEffect(()=>{
    const getInformation = ()=>{
    axios.get(`https://api.spoonacular.com/recipes/${singleRecipeid}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
        .then(res => {
            setData(res.data)
            setInstructions(res.data?.analyzedInstructions[0]?.steps)
            setIngredients(res.data?.extendedIngredients) 
            setLoading(false)
        })
        .catch(err => {
            console.log(err)
            setLoading(false)
        })
    }
        getInformation() 
    },[singleRecipeid])
    
    useEffect(()=>{
    setTimeout(()=>{
        setFavProdAlreadyAdd(false)
    },1000)
    },[favProdAlreadyAdd])
    
    return( 
        
    <main className={styles.singleRecipeContainer}>
        {favProdAlreadyAdd && <div className={styles.modalAlreadyAdd}><h1>Product already added</h1></div>}
        
        { loading ? 
            <h1>...Loading</h1>
            :
            data.length !== 0 ?
            <>
            
              <div  className={styles.detailsContainer}>
                <RecipeMainDetails data={data}/>
                <RecipeIngredients ingredients = {ingredients}/> 
                <RecipeInstructions instructions = {instructions}/>
              </div>
            
              <AddFavButton favData={favData} setFavProdAlreadyAdd={setFavProdAlreadyAdd}/>
              <Link to='/'>Back Home</Link>
            </>
            :
            <h1>Sorry result not found</h1>
        }
    </main>      
    )
}

export default SingleRecipe