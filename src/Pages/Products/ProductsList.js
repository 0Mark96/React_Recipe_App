import React from "react";
import {Link} from 'react-router-dom'
import { useContext } from "react";
import { RecipeDataContext } from "../SharedLayout/SharedLayout";


const ProductsList = ()=>{
    const data = useContext(RecipeDataContext)
    return (
        <main>
            {data.map((item)=>{
                const id = item.id.toString()
                   return <div key={item.id}>
                     <h1>{item.title}</h1>
                    <Link to={id}>single product</Link>
                   </div>
                     
                    
            })}
              
                 
        </main>
    )
}

export default ProductsList