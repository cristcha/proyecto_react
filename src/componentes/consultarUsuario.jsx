import '../css/consultarUsuario.css'

function ConsultarUsuario() {
    return(
        <div>
            <div id="usuario">
                <label for="">Nombre</label>
                <input type="text" disabled />
                <label for="">Identificaci&oacute;n</label>
                <input type="text" disabled />
                <label for="">Correo</label>
                <input type="email" name="" id="" disabled />
                <br />
                <label for="">Telefono</label>
                <input type="text" name="" id="" disabled />
                <label for="">Direcci&oacute;n</label>
                <input type="text" name="" id="" disabled />
            </div>
            <div id="datos">
                <div>
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
                            <td>Firulais</td>
                            <td>Perro</td>
                            <td>1 a&ntilde;o</td>
                            <td>Hembra</td>
                            <td>No</td>
                            </tr>
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
                <div>
                    <h2>Citas</h2>
                    <table>
                        <thead>
                            <tr>
                            <th>C&oacute;digo</th>
                            <th>Mascota</th>
                            <th>Tipo</th>
                            <th>Fecha</th>
                            <th>Hora</th>
                            <th>Veterinario</th>
                            <th>Estado</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>FI0001</td>
                            <td>Firulais</td>
                            <td>Consulta</td>
                            <td>15/11/2024</td>
                            <td>03:00 PM</td>
                            <td>Hannah</td>
                            <td>Agendada</td>
                            <td><button class="b-detalle">Detalle</button></td>
                            <td><button class="b-reagendar">Reagendar</button></td>
                            <td><button class="b-cancelar">Cancelar</button></td>
                            </tr>
                            <tr>
                            <td>MI0001</td>
                            <td>Mishi</td>
                            <td>Vacunaci&oacute;n</td>
                            <td>25/08/2024</td>
                            <td>10:00 AM</td>
                            <td>Jhon</td>
                            <td>Tomada</td>
                            <td><button class="b-detalle">Detalle</button></td>
                            <td></td>
                            <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <a href="/" id="b-home">Home</a>
            <a href="/consultar" id="b-volver">Volver</a>
        </div>
    )
}

export default ConsultarUsuario