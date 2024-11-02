import '../css/consultarCita.css'

function ConsultarCita() {
    
    return(
        <div>
            <div id="datosMascota">
                <h2>Datos de la Mascota</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Clase</th>
                            <th>Edad</th>
                            <th>Sexo</th>
                            <th>Chip</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mishi</td>
                            <td>Gato</td>
                            <td>5 meses</td>
                            <td>Macho</td>
                            <td>S&iacute;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div id="datosCita">
                <h2>Datos Cita</h2>
                <table>
                    <thead>
                    <tr>
                        <th>Tipo</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Estado</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Vacunaci&oacute;n</td>
                        <td>25/08/2024</td>
                        <td>10:00 AM</td>
                        <td>Tomada</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div id='motivo'>
                <h3>Motivo Cita</h3>
                <textarea name="" id=""></textarea>
            </div>
            <div id='obser'>
                <h3>Observaciones</h3>
                <textarea name="" id=""></textarea>
            </div>
            <div id='resultado'>
                <h3>Resultados</h3>
                <textarea name="" id=""></textarea>
            </div>
            <p className='veterinario'>Veterinario: <b>Jhon</b></p>
            <a href="/" id="b-home">Home</a>
            <a href="/consultar" id="b-volver">Volver</a>
        </div>
    )
}

export default ConsultarCita