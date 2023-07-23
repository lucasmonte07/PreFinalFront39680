import './Pages.css'
import { useRef } from "react"

export const Login = () => {

    const datFormLog = useRef() //Crear una referencia para consultar los valoresa actuales del form

    const consultarFormLog = (e) => {
        //Consultar los datos del formulario
        e.preventDefault()
        const datosFormularioLog = new FormData(datFormLog.current) //Pasar de HTML a Objeto Iterable
        const clienteLog = Object.fromEntries(datosFormularioLog) //Pasar de objeto iterable a objeto simple
        
        //hago login en el bakcend
        fetch('http://localhost:4000/api/session/login', {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(clienteLog)
        })
        .then(responselog => responselog.json())        
        .then(datalog => { 
            document.cookie = `token=${datalog.token}; expires=${new Date
            (Date.now() + 1 * 24 * 60 * 60 * 1000).toUTCString()}; path=/`
             console.log(datalog.token)
        })
        .catch(error => console.error(error))

        e.target.reset() //Reset form

        //asigno carrito en el backend
        fetch('http://localhost:4000/api/cart', {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(clienteLog)
        })

        alert("Bienvenido a sitio")
    }
    return (

        <div className= "FraLogin">
            <div className="divFormLog" >

                <h3 className="NomFormu">Login</h3>

                <form onSubmit={consultarFormLog} ref={datFormLog}>
                    
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input type="email" className="form-control" name="email" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password:</label>
                        <input type="password" className="form-control" name="password" />
                    </div>

                    <button type="submit" className="btn-primary">Send</button>

                </form>
            </div>
        </div>
    )
}