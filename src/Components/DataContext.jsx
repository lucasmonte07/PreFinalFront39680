import { createContext, useState, useEffect } from 'react';

export const dataContext = createContext();

const DataProvider = ({children}) => {

    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);
    const [deta, setDeta] = useState([])
    const [formu, setFormu] = useState(0)        
 
    useEffect(() =>{    

      fetch("http://localhost:4000/product/")
      .then(res => res.json())        
      .then(dato => setData(dato.docs))    
    
    },[]);    


    const buyProducts = (product) => {
        const productRepeat = cart.find((item) => item.code === product.code);
        if(productRepeat) {
            setCart(cart.map((item) => item.code === product.code ? {...product, quantity: 
            productRepeat.quantity + 1 } : item))
        } else {
            setCart([...cart, product])
        }        
    }     
    
    const delProduct = (id) => {        
//        const foundId = cart.find((ele) => ele.id === id);        
//        const newCart = cart.filter((element) => {
//            return element !== foundId;
//        });
//        setCart(newCart)
    }

    return <dataContext.Provider value={{ data, cart, setCart, deta, setDeta, formu, setFormu, buyProducts, delProduct }}>{children}</dataContext.Provider>
    
};

export default DataProvider;