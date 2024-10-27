import '../css/home.css'

function Home() {
    function view_consultar() {
        window.location = '/consultar'    
    }
    return(
        <div>
            <div id="cuadro1"> 
                <h2>
                <div id="registro">Registrate y programa tu cita
                </div>
                </h2> 
                <button className='btn'> Registrar </button>

            </div>
            <div id="cuadro2">
                <h2>
                    <div id="consulta">Consulta tu cita
                    </div>
                </h2>
                <button className='btn' onClick={view_consultar}> Consultar </button>
            </div>
            <div id="derecha"> </div>
        </div>
    )
}

export default Home