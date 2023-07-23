import { useContext } from 'react';
import { dataContext } from '../DataContext';
import './Deta.css'

import React from 'react'

const DetaElements = () => {
    
    const { deta, setDeta, buyProducts, delProduct } = useContext(dataContext);
    
    const cleanViewDeta = () => {
        setDeta([])               
    }

    return deta.map((product)=> {
        return (
            <div className="detaContent" key={ product.id }>                
                <img className="imgzapa2" src= {product.img} alt=""/>
                <div className="DetailDirection">                
                    <div className="DetailHeader">
                        <h3 className="titleDesignDeta">{product.title}</h3>
                        <h3 className= "descripDesignDeta">{product.description}</h3>                        
                    </div>
                    <h3 className="priceDesignDeta">$ {product.price}</h3>
                    <h3 className="detailDesignDeta">{product.details}</h3>
                    <h3 className="stockDesignDeta">Disponibles en Stock: {product.stock}</h3>
                    <div clasName="DetailButtons">    
                        <button className="buttonDesignDeta" onClick={()=> buyProducts(product)}>Add to Cart</button>
                        <button className="buttonDesignDeta" onClick={()=> delProduct(product.id)}>Remove</button>
                        <button className="buttonDesignDeta" onClick={()=> cleanViewDeta()}>Close</button>                
                    </div>
                </div>
            </div>
        )
    })
}

export default DetaElements
