import {Link} from 'react-router-dom'
import {useContext,useEffect} from "react";
import { setFavProductsContext } from "../SharedLayout/SharedLayout";
import styles from './Favourite.module.scss';
import FavCard from '../../Components/FavCard/FavCard';

const Favourite = () => {
  const {favProducts,setFavProducts} = useContext(setFavProductsContext) // all data of favourite products selected
 
  useEffect(()=>{
    window.scrollTo(0,0)
    },[])

  //Remove favourite
  const removeItem = (id)=>{
    setFavProducts((favProducts)=>{
       return favProducts.filter((favProduct)=>favProduct.id !== id)
    })
  }
  
    return(
    <main className={styles.favouriteSection}>
        <h1>Favourite Recipes</h1>
          {
            favProducts.length === 0 ?
                 <h1>No favourite recipes</h1>
                 :
                 <div  className={styles.favProductsListContainer}> 
                   {
                     favProducts.map((item)=>{
                        return <FavCard item={item} key={item.id} removeItem={removeItem}/>
                      })
                    }
                 </div>
          }
        <Link to='/'>Back Home</Link>  
    </main>
    )
};

export default Favourite