import React from 'react'
import { useContext } from 'react';
import { dataContext } from '../DataContext';
import './Cart.css'
import CartCounter from './CartCounter'

const CartElements = () => {

    const { cart, delProduct } = useContext(dataContext);

    return cart.map((product)=> {
        return (
            <div className="cartContent" key={ product.id }>                
                <h3 className="titleDesignCart">{product.title}</h3>
                <h3 className= "descripDesignCart">{product.description}</h3>
                <h3 className="priceDesignCart">$ {product.price * product.quantity}</h3>
                <CartCounter product={product}/>
                <h3 className="delCartProd" onClick={()=> delProduct(product.id)} >X</h3>                
            </div>
        )
    })
}

export default CartElements
