import { useContext } from 'react';
import { dataContext } from './DataContext'
import './Products.css';

const Products = () => {    
    const { data, deta, setDeta, buyProducts } = useContext(dataContext);    

    const viewProducts = (product) => {
        setDeta([...deta, product])
    } 

    return data.map((product)=> {
        return (
            <div className="cardio" key={product.id}>
                <img className="imgzapa1" src= {product.img} alt="sdfsf"/>
                <h3 className="titleDesign">{product.title}</h3>
                <h3 className= "descripDesign">{product.description}</h3>
                <h3 className="priceDesign">{product.price}$</h3>
                <button className="buttonDesign" onClick={()=> buyProducts(product)}>Add to Cart</button>                
                <button className="buttonDesign" onClick={()=> viewProducts(product)}>View Details</button>      
            </div>
        )
    })

};

export default Products;