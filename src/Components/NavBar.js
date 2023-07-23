import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    
    return (     

        <div className="Todo">

            <div className="Titulo">
                <h2>ZapShop</h2>                    
            </div>
                
            <div className="Nave">                    
                <ul className="lista">
                        {/*
                        <li><Link to="/Inicio">Inicio</Link></li>            
                        <li><Link to="/Productos">Productos</Link></li>
                        <li><Link to="/Servicios">Servicios</Link></li>
                        */}

                    <li><NavLink                  
                    className={({isActive}) => (isActive ? "active" : "desactive")}
                    to="/login">Login</NavLink></li>

                    <li><NavLink 
                    className={({isActive}) => (isActive ? "active" : "desactive")}
                    to="/register">Register</NavLink></li>
                        
                    <li><NavLink 
                    className={({isActive}) => (isActive ? "active" : "desactive")}
                    to="/products">Products</NavLink></li>                

                    <li><NavLink 
                    className={({isActive}) => (isActive ? "active" : "desactive")}
                    to="/buynow">BuyNow</NavLink></li> 

                </ul>
            </div>
            
            <div className="Carrito"></div>

        </div>                
    )
}

export default NavBar