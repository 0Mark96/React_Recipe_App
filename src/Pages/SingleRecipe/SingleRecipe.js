import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import AddFavButton from '../../Components/AddFavButton/AddFavButton';
import RecipeIngredients from '../../Components/RecipeIngredients/RecipeIngredients';
import RecipeInstructions from '../../Components/RecipeInstructions/RecipeInstructions';
import RecipeMainDetails from '../../Components/RecipeMainDetails/RecipeMainDetails';
import styles from './SingleRecipe.module.scss';
import { getInfo } from '../../Components/ApiClient';

const SingleRecipe = () => {
    let {singleRecipeid} = useParams()

    const [data,setData] = useState([])
    const [instructions,setInstructions] = useState([])
    const [ingredients,setIngredients] = useState([])
    const [loading,setLoading]=useState(true)
    const [favProdAlreadyAdd,setFavProdAlreadyAdd] = useState(false)
    const [productCorrectAdd,setProductCorrectAdd] = useState(false)

    useEffect(()=>{
        window.scrollTo(0,0)
        },[])
        
    //object for favourite page
    const favData = {
        title:data.title,
        image:data.image,
        id:data.id
    }
 
    useEffect(()=>{
        const apiCall = getInfo(singleRecipeid);
        apiCall.then(res => {
            setData(res.data)
            setInstructions(res.data?.analyzedInstructions[0]?.steps)
            setIngredients(res.data?.extendedIngredients) 
            setLoading(false)
        })
        .catch(err => {
            console.log(err)
            setLoading(false)
        })
    },[singleRecipeid])
    
    useEffect(()=>{
    setTimeout(()=>{
        setFavProdAlreadyAdd(false)
    },1000)
    },[favProdAlreadyAdd])
   
    useEffect(()=>{
        setTimeout(()=>{
            setProductCorrectAdd(false)
        },1000)
        },[productCorrectAdd])
    
    return( 
        
    <main className={styles.singleRecipeContainer}>
        {favProdAlreadyAdd ? <div className={styles.modalAlreadyAdd}><h1>Product already added</h1></div> : ''}
        {productCorrectAdd ? <div className={styles.modalCorrectAdd}><h1>Product successfully added</h1></div> : ''}


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
            
              <AddFavButton favData={favData} setFavProdAlreadyAdd={setFavProdAlreadyAdd} setProductCorrectAdd={setProductCorrectAdd} />
              <Link to='/'>Back Home</Link>
            </>
            :
            <h1>Sorry result not found</h1>
        }
    </main>      
    )
}

export default SingleRecipe