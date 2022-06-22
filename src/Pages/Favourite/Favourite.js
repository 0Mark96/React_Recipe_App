import {Link} from 'react-router-dom'
import {useContext} from "react";
import { setFavProductsContext } from "../SharedLayout/SharedLayout";
import styles from './Favourite.module.scss';
import FavCard from '../../Components/FavCard/FavCard';

const Favourite = () => {
  const {favProducts,setFavProducts} = useContext(setFavProductsContext) // all data of favourite products selected

  //Remove favourite
  const removeItem = (id)=>{
    setFavProducts((favProducts)=>{
       return favProducts.filter((favProduct)=>favProduct.id !== id)
    })
  }
  
    return(
    <main className={styles.favouriteSection}>
        <h1>Favourite Product</h1>
          {
            favProducts.length === 0 ?
                 <h1>No favourite products</h1>
                 :
                 <div  className={styles.favProductsListContainer}> 
                   {
                     favProducts.map((item)=>{
                        return <FavCard item={item} key={item.id} removeItem={removeItem}/>
                      })
                    }
                 </div>
          }
        <Link to='/'><h3>Back Home</h3></Link>  
    </main>
    )
};

export default Favourite