import React from 'react'
import { useRef } from "react"
import { useContext } from 'react';
import { dataContext } from '../DataContext';
import './Form.css'
 
const FormElements = () => {

  const { setFormu, setCart  } = useContext(dataContext);

  const CierraMsg = () => {
    setFormu(0)
    setCart([])                        
}

  const datForm = useRef() //Crear una referencia para consultar los valoresa actuales del form

  const consultarForm = (e) => {
    //Consultar los datos del formulario
    e.preventDefault()
    const datosFormulario = new FormData(datForm.current) //Pasar de HTML a Objeto Iterable
    const cliente = Object.fromEntries(datosFormulario) //Pasar de objeto iterable a objeto simple

    console.log(cliente)


  // Esto es para volcar los datos a una base de datos como mongodb o firebase  
  /*
    fetch('http://localhost:4000/api/session/register', {
      method: "POST", 
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(cliente)
  })

  .then(response => response.json()) 

  .catch(error => console.error(error))
  */  

  e.target.reset() //Reset form
  }

    return (

      <div className="FraMsg">
          <div className="divForm" >

              <h3 className="NomFormu">Thank you for your purchase !!!</h3>

              <form onSubmit={consultarForm} ref={datForm}>

                  <div className="mb-3">
                      <label htmlFor="first_name" className="form-label">FistName:</label>
                      <input type="text" className="form-control" name="first_name" required />
                  </div>
                  
                  <div className="mb-3">
                      <label htmlFor="last_name" className="form-label">LastName:</label>
                      <input type="text" className="form-control" name="last_name" required />
                  </div>                
                  
                  <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="email" className="form-control" name="email" />
                  </div>

                  <button type="submit" className="btn btn-primary">Send</button>
                  <button type="submit2" className="btn btn-primary" onClick={()=> CierraMsg()} >Close</button>
              
              </form>

          </div>
      </div>
  )
}

export default FormElements