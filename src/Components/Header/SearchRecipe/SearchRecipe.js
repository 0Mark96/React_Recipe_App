import React, { useContext } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { setRecipesContext } from "../../../Pages/SharedLayout/SharedLayout";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import styles from "./SearchRecipe.module.scss";


const SearchBook = ()=>{
    const [input,setInput] = useState('')
    const [query,setQuery] = useState('pasta')
    const {recipes,setRecipes} = useContext(setRecipesContext)
    let navigate = useNavigate()
    useEffect(()=>{
            const getApi = () => {
                axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${process.env.REACT_APP_API_KEY}&diet=vegetarian`)
                .then(res => {
                  setRecipes(res.data.results)
                })
                }
        getApi()
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
            <input type='text' onChange={handleChange}/>
            <button type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} size='xl'/></button>
        </form>
    )
}
export default SearchBook