import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './componentes/home';
import Consultar from './componentes/consultar';
import Nav from './componentes/nav';
import ConsultarUsuario from './componentes/consultarUsuario';
import ConsultarCita from './componentes/consultarCita';
import Registrar from './componentes/registrar';
import RegistrarUsuario from './componentes/registrarUsuario';
import RegistrarCita from './componentes/registrarCita';

function App() {
  return (
    <div className="App">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/registrar' element={<Registrar/>}/>
          <Route path='/registrarUsuario' element={<RegistrarUsuario/>}/>
          <Route path='/registrarCita' element={<RegistrarCita/>}/>
          <Route path='/consultar' element={<Consultar />}/>
          <Route path='/consultarUsuario' element={<ConsultarUsuario />}/>
          <Route path='/consultarCita' element={<ConsultarCita />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
