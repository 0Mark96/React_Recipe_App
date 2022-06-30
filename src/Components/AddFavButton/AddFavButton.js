import { setFavProductsContext } from '../../Pages/SharedLayout/SharedLayout';
import { useContext } from 'react';

const AddFavButton = ({favData,setFavProdAlreadyAdd,setProductCorrectAdd}) => {
  const {favProducts,setFavProducts}= useContext(setFavProductsContext)
  const addToFavourite = ()=>{
    if(favProducts.some(e => e.id === favData.id)){
      setFavProdAlreadyAdd(true)
    }else{
      setFavProducts((oldProduct=>[...oldProduct,favData])) 
      setProductCorrectAdd(true)
    }
  }
  

  
  return (
    <button onClick={addToFavourite}>Add to favourite</button>
  )
}

export default AddFavButton