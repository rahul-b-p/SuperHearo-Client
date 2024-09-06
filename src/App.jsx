import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Grevience from './Pages/Grevience'
import Dashboard from './Pages/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<About />} path='/about' />
        <Route element={<Grevience />} path='/grevience' />
        <Route element={<Dashboard />} path='/dashboard' />
      </Routes>
    </>
  )
}

export default App
