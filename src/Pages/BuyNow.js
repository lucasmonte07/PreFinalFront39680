import './Pages.css'
import React from 'react'
import Products from '../Components/Products'
import Cart from '../Components/CartContent/CartContent'
import Deta from '../Components/DetaContent/DetaContent'
import Formu from '../Components/FormContent/FormContent'


export const BuyNow = () => {
  
    return (
      <div className="card-direction-global">
          <div className= "card-direction">
              <Products/>               
          </div>
        <Cart/>
        <Deta />
        <Formu />
      </div>
  )
}

export default BuyNow
