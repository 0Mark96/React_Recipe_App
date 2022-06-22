import React from 'react'
import { Link } from 'react-router-dom'
import styles from './FavCard.module.scss'

const FavCard = ({item,removeItem}) => {
  return (
    <div key={item.id} className={styles.favProductContainer}>
    <h1>{item.title}</h1>
    <img src={item.image} alt={item.title}/>
    <button onClick={()=>removeItem(item.id)}><h3>Remove</h3></button>
    <Link to={`/products/${item.id}`}><h3>Read More</h3></Link>
  </div>
  )
}

export default FavCard