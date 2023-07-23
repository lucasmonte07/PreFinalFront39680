import React from 'react'
import { useContext } from 'react';
import { dataContext } from '../DataContext';

const CartTotConfirm = () => {

    const { setFormu, formu, setDeta } = useContext(dataContext);

    const buynowConfirm = () => {
        setFormu(1)
        console.log(formu)
        setDeta([])         
    }

    return (
    
    <div className="clean-cart">        
        <button className="buynowConfirmButton" onClick={()=> buynowConfirm()}>BUY NOW</button>            
    </div>     
    
  )
}

export default CartTotConfirm
