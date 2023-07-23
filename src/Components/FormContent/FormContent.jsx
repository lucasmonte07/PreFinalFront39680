import React from 'react'
import { useContext } from 'react';
import { dataContext } from '../DataContext';
import FormElements from './FormElements'
import './Form.css'


const Formu = () => {

    const { formu } = useContext(dataContext);  

  return formu > 0 ? (<div className="FormDesign">
      <FormElements />  
    </div>)
    :
    (null)    
}

export default Formu
