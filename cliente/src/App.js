import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Registrarse from './components/Registrarse'
import Navbar from './components/Navbar'
import Logueado from './components/logueado';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/registrate' element={<Registrarse />} />
          <Route path='/logueado' element={<Logueado />} />


        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
