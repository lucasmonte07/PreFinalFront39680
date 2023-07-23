import React from 'react'
import DetaElements from './DetaElements'
import { useContext } from 'react';
import { dataContext } from '../DataContext';
import './Deta.css'

const Deta = () => {    

    const { deta } = useContext(dataContext);

    return deta.length > 0 ? (<div className="DisDetaCompleto">        
                <DetaElements/>
            </div>)
            :
            (null)            
              
}

export default Deta
