import '../css/nav.css'

function Nav() {
    return(
        <nav>
            <div>
                <ul className='nav-menu'>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/registrar'>Registrar</a></li>
                    <li><a href='/consultar'>Consultar</a></li>
                </ul>
            </div>
            <h1>PER DOCTOR</h1>
        </nav>
    )
}

export default Nav