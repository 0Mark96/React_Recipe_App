import { setFavProductsContext } from '../../Pages/SharedLayout/SharedLayout';
import { useContext } from 'react';


const AddFavButton = ({favData,setFavProdAlreadyAdd}) => {
  const {favProducts,setFavProducts}= useContext(setFavProductsContext)

  const addToFavourite = ()=>{
    favProducts.some(e => e.id === favData.id) ?
      setFavProdAlreadyAdd(true) 
    :
    setFavProducts((oldProduct=>[...oldProduct,favData]))   
  }
  

  
  return (
    <button onClick={addToFavourite}>Add to favourite</button>
  )
}

export default AddFavButton