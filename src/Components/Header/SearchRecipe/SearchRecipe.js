import React, { useContext } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { setRecipesContext } from "../../../Pages/SharedLayout/SharedLayout";

const SearchBook = ()=>{
    const [input,setInput] = useState('')
    const [query,setQuery] = useState('pasta')
    const {recipes,setRecipes} = useContext(setRecipesContext)

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
        }
        const handleChange = (e) => {
          setInput(e.target.value)
        }
        
    return(
        <form onSubmit={handleSubmit}>
            <input type='text' onChange={handleChange}/>
            <button type="submit">search</button>
        </form>
    )
}
export default SearchBook