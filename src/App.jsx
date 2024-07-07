import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Menu from '../src/Components/Menu/Menu';
import Drawings from '../src/Components/Drawings/Drawings';
import Paintings from '../src/Components/Paintings/Paintings';
import Collage from '../src/Components/Collage/Collage';
import Installations from '../src/Components/Installations/Installations';
import OleoPastel from '../src/Components/OleoPastel/OleoPastel';
import Home from '../src/Components/Home/Home';
import About from '../src/Components/About/About';
import Footer from '../src/Components/Footer/Footer';
import PinturaSobreCartulina from '../src/Components/Pintura_Sobre_Cartulina/PinturaSobreCartulina';
/* import Button from '../src/Components/Utils/ChangeLanguageButton';
 */
function App() {


  return (
    <>
    <BrowserRouter>
      <Menu />
      {/* <Button /> */}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/About" element={<About />} />
            <Route path="/Drawings" element={<Drawings />} />
            <Route path="/Paintings" element={<Paintings />} />
            <Route path="/Collage" element={<Collage />} />
            <Route path="/Installations" element={<Installations />} />
            <Route path="/OleoPastel" element={<OleoPastel />} />
            <Route path="/Pintura_sobre_cartulina" element={<PinturaSobreCartulina />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
