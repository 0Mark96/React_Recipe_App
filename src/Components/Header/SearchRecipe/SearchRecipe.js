import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { RecipeDataContext} from "../../../Pages/SharedLayout/SharedLayout";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import styles from "./SearchRecipe.module.scss";
import { loadingProductsContext } from "../../../Pages/SharedLayout/SharedLayout";
import { getSearched } from "../../ApiClient";

const SearchRecipe = ()=>{
    const [input,setInput] = useState('')
    const [query,setQuery] = useState('pasta')
    const {setRecipes} = useContext(RecipeDataContext)
    const {setLoadingProducts} = useContext(loadingProductsContext)
     
    let navigate = useNavigate()
    
    useEffect(()=>{       
            const apiCall = getSearched(query);
		    apiCall.then(res => {
                setRecipes(res.data.results)
                setLoadingProducts(false)
            })
            .catch(err => {
                        console.log(err)
                        setLoadingProducts(false)
                    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
        },[query])
        
        const handleSubmit = (e) => {
            e.preventDefault()
            setQuery(input)
            navigate('/')
        }
        const handleChange = (e) => {
          setInput(e.target.value)
        }
        
    return(
        <form onSubmit={handleSubmit} className={styles.form}>
            <input type='text' onChange={handleChange} placeholder='Spinach,egg...'/>
            <button type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} size='xl'/></button>
        </form>
    )
}
export default SearchRecipe