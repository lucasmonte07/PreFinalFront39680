import React from 'react'
import { useContext } from 'react';
import { dataContext } from '../DataContext';


const CartCounter = ({product}) => {

    const {  cart, setCart, buyProducts } = useContext(dataContext);

    const decrease = () => {
        const productRepeat = cart.find((item) => item.code === product.code);

        productRepeat !== 1 && setCart(cart.map((item) => item.code === product.code ? {...product, quantity: 
            productRepeat.quantity - 1 } : item))
    }

    return (
        <div>
            <>
                <div className="counterButtonGral">
                    <p className="counterButton" onClick={decrease}>-</p>
                    <p className="counterButtonq">{product.quantity}</p>
                    <p className="counterButton" onClick={()=> buyProducts(product)}>+</p>
                </div>
            </>
        </div>
    )
}

export default CartCounter
