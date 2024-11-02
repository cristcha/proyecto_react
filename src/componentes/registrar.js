import "../css/registrar.css"
import { Link } from 'react-router-dom'


function Registrar() {
    return(
        <div>
            
            <section className="contenedor-formulario">
                <div className='caja'>
                    <h2>Usuario</h2>
                    <label htmlFor="">Registrar Usuario</label>
                    <br/>
                    <Link to="/registrarUsuario" className="b-registrar">Registrar</Link>
                    
                </div>
                <div className="caja">
                <h2>Cita</h2>
                    <label htmlFor="">Registrar Cita</label>
                    <br/>
                    <Link to="/registrarCita" className="b-registrar">Registrar</Link>
                </div>
            </section>
            <div id="volver">
                <a href="/" id="b-volver">Volver</a>
            </div>

        </div>
        
        
    )
}
export default Registrar