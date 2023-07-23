import { useContext } from 'react';
import { dataContext } from '../DataContext';
import React from 'react'

const CartTotal = () => {
    const { cart } = useContext(dataContext);
    
    const total = cart.reduce((acc, eleme) => acc + eleme.price * eleme.quantity, 0)
    
    return (
        <div className="cart-total">
            <h3 className="cart-total-pagar">Total a Pagar: $ { total } </h3>
        </div>
    )
}

export default CartTotal
