import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SharedLayout from './Pages/SharedLayout/SharedLayout'
import ProductsList from './Pages/Products/ProductsList'
import SingleRecipe from './Pages/SingleRecipe/SingleRecipe'
import Favourite from './Pages/Favourite/Favourite'

function App() {
 
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
       <Route path='/' element={<SharedLayout />}>
          <Route index element={<ProductsList/>}/>
          <Route path=':singleRecipeid' element={<SingleRecipe />}/>
          <Route path='favourite' element={<Favourite />}/>
       </Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
