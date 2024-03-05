import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Menu from '../src/Components/Menu/Menu';
import Drawings from '../src/Components/Drawings/Drawings';
import Home from '../src/Components/Home/Home';
import About from '../src/Components/About/About';
import Footer from '../src/Components/Footer/Footer';
import './App.css'

function App() {


  return (
    <>
    <BrowserRouter>
      <Menu />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/About" element={<About />} />
            <Route path="/Drawings" element={<Drawings />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
