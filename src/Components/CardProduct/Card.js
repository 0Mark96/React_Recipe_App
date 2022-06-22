import React from 'react';
import styles from './Card.module.scss';
import { Link } from 'react-router-dom';
import imgNotFound from '../../Assets/Img/image-not-found.png'

const Card = ({item}) => {
const id = item.id.toString()
  return (
    <div className={styles.productContainer}>
        <h1>{item.title || 'No title'}</h1>
        <img src={item.image || imgNotFound} alt={item.title} />
        <Link to={`/products/${id}`}><h3>Read More</h3></Link>
    </div>
  )
}

export default Card