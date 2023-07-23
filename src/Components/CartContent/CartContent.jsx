import React from 'react'
import { useContext } from 'react';
import { dataContext } from '../DataContext';
import CartElements from './CartElements'
import CartTotal from './CartTotal'
import CartTotConfirm from './CartTotConfirm'
import CleanCart from './CleanCart';
import './Cart.css'


const Cart = () => {
    
    const { cart } = useContext(dataContext);        

    return cart.length > 0 ? (<div className="DisCarritoCompleto">
        <div className="head-cart">CART</div>
            <CartElements/>
            <CartTotal/>
            <CartTotConfirm />                     
            <CleanCart />                   
        </div>  
    ) 
    : 
    (
        <>
            <div className="DisCarritoVacio">
                <div className="hcart1">CART</div> 
                <div className="hcart2">
                    <button className="hcart2simubutton">EMPTY</button>
                </div>
            </div>
        </>
     )      
}

export default Cart
