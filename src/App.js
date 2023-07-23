import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar'
import NotFound from './Pages/NotFound';
import Cart from './Components/CartContent/CartContent';
import { Login } from './Pages/Login';
import { Register } from './Pages/Register';
import { Product } from './Pages/Productos';
import BuyNow from './Pages/BuyNow'
import DataProvider from './Components/DataContext'

function App() {  
  
  return (
    <>
      <DataProvider>

        <BrowserRouter>
            
            <NavBar />

            <Routes> 
              
              
              <Route path= "/login" element={<Login />}/>
              <Route path= "/register" element={<Register />}/>
              <Route path= "/products" element={<Product />}/>
              <Route path= "/buynow" element={<BuyNow />}/>
              <Route path= "/cart" element={<Cart />}/>
              <Route path= "/" element={<Login />}/>
              <Route path= "*" element={<NotFound />}/>
            
            
            </Routes>
        
        </BrowserRouter>
      
      </DataProvider>

    </>
  );
}

export default App;
