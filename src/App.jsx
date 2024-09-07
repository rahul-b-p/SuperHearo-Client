import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Grevience from './Pages/Grevience'
import Dashboard from './Pages/Dashboard'
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/css/main.css'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <div className="index-page w-100">
        <Header />
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<About />} path='/about' />
          <Route element={<Grevience />} path='/grevience' />
          <Route element={<Dashboard />} path='/dashboard' />
        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App
