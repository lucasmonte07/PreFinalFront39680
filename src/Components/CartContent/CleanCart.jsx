import React from 'react'
import { useContext } from 'react';
import { dataContext } from '../DataContext';

const CleanCart = () => {

    const { setCart , setFormu, setDeta } = useContext(dataContext);

    const cleanCarts = () => {
        setCart([])
        setDeta([])
        setFormu(0)                        
    }

    return (
        <div className="clean-cart">        
            <button className="clean-cart-button" onClick={()=> cleanCarts()}>CLEAN CART</button>            
        </div>
    )
}

export default CleanCart