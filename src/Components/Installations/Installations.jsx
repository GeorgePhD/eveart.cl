import './installations.css';
import Image1 from '../../images/InstallationsOptimized/optimized1/installations (1).png'
import Image2 from '../../images/InstallationsOptimized/optimized1/installations (2).png'
import Image3 from '../../images/InstallationsOptimized/optimized1/installations (3).png'
import Image4 from '../../images/InstallationsOptimized/optimized1/installations (4).png'
import Image5 from '../../images/InstallationsOptimized/optimized1/installations (5).png'
import Image6 from '../../images/InstallationsOptimized/optimized2/installations (6).png'
import Image7 from '../../images/InstallationsOptimized/optimized2/installations (7).png'
import Image8 from '../../images/InstallationsOptimized/optimized3/installations (8).png'
import Image9 from '../../images/InstallationsOptimized/optimized3/installations (9).png'
import Image10 from '../../images/InstallationsOptimized/optimized3/installations (10).png'
/* import Image11 from '../../images/InstallationsOptimized/optimized3/installations (11).png' */
import Image12 from '../../images/InstallationsOptimized/optimized3/installations (12).png'
import Image13 from '../../images/InstallationsOptimized/optimized3/installations (13).jpg'
import Image14 from '../../images/InstallationsOptimized/optimized3/installations (14).png'
import Image15 from '../../images/InstallationsOptimized/optimized3/installations (15).png'
import Image16 from '../../images/InstallationsOptimized/optimized3/installations (16).png'
import Image17 from '../../images/InstallationsOptimized/optimized3/installations (17).png'
import Image18 from '../../images/InstallationsOptimized/optimized3/installations (18).png'
import Image19 from '../../images/InstallationsOptimized/optimized4/installations (19).png'
import Image20 from '../../images/InstallationsOptimized/optimized4/installations (20).png'
import Image21 from '../../images/InstallationsOptimized/optimized4/installations (21).png'
import Image22 from '../../images/InstallationsOptimized/optimized4/installations (22).png'
import Image23 from '../../images/InstallationsOptimized/optimized4/installations (23).png'
import Image24 from '../../images/InstallationsOptimized/optimized5/installations (24).png'
import Image25 from '../../images/InstallationsOptimized/optimized5/installations (25).png'
import Image26 from '../../images/InstallationsOptimized/optimized6/installations (26).png'
import Image27 from '../../images/InstallationsOptimized/optimized6/installations (27).png'
import Image28 from '../../images/InstallationsOptimized/optimized7/installations (28).png'
import Image29 from '../../images/InstallationsOptimized/optimized7/installations (29).png'
import Image30 from '../../images/InstallationsOptimized/optimized7/installations (30).png'
import Image31 from '../../images/InstallationsOptimized/optimized7/installations (31).png'
import Image32 from '../../images/InstallationsOptimized/optimized8/installations (32).png'
/* import Image33 from '../../images/InstallationsOptimized/optimized10/installations (33).png'
 */
import Image34 from '../../images/InstallationsOptimized/optimized10/installations (34).png'
import Image35 from '../../images/InstallationsOptimized/optimized10/installations (35).png'
import Image36 from '../../images/InstallationsOptimized/optimized10/installations (36).png'
import Image37 from '../../images/InstallationsOptimized/optimized10/installations (37).png'
import Image38 from '../../images/InstallationsOptimized/optimized10/installations (38).png'
import Image39 from '../../images/InstallationsOptimized/optimized10/installations (39).png'
import Image40 from '../../images/InstallationsOptimized/optimized11/installations (40).png'
import Image41 from '../../images/InstallationsOptimized/optimized11/installations (41).png'
import Image42 from '../../images/InstallationsOptimized/optimized12/installations (42).png'
import Image43 from '../../images/InstallationsOptimized/optimized12/installations (43).png'
import Image44 from '../../images/InstallationsOptimized/optimized12/installations (44).png'
import ContactBtn from '../ContactBtn/ContactBtn'

import { useEffect, useState } from 'react';

const Installations = () => {

    const [fullScreenImage, setFullScreenImage] = useState(null);
    const handleClick = (installation) => {
        if (fullScreenImage === installation) {
            setFullScreenImage(null);
        } else {
            setFullScreenImage(installation);
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            const items = document.querySelectorAll('.installations__container');
            console.log('handleScroll called');
            items.forEach((item) => {
                const itemTop = item.getBoundingClientRect().top;
                console.log('itemTop:', itemTop);
                // Adjust this value based on when you want the animation to start
                if (itemTop < window.innerHeight * 0.5) {
                    item.style.opacity = 1;
                    item.style.transition = 'opacity 0.5s ease-in-out';
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Call it once to check initial state

        // Cleanup the event listener when the component is unmounted
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array means this effect runs once after initial render

    return (
        <>
        <div className="grid-container">
            <section className="installations__container">
                <div className="main__image__container">
                    <img 
                        src={Image1} 
                        className={fullScreenImage === Image1 ? 'main__image fullScreenImage' : 'main__image'} 
                        alt="Main image" 
                        onClick={() => handleClick(Image1)} 
                    />
                </div>
                    <p className="installations__content">La poesía se hace tachando, 2015. Fragmentos de obras, objetos encontrados, dimensiones variables.</p>
                <div className="sub__images__container">
                    <img 
                        src={Image2} 
                        className={fullScreenImage === Image2 ? 'sub-image fullScreenImage' : 'sub-image'} 
                        alt="Sub image" 
                        onClick={() => handleClick(Image2)} 
                    />
                    <img 
                        src={Image3} 
                        className={fullScreenImage === Image3 ? 'sub-image fullScreenImage' : 'sub-image'} 
                        alt="Sub image" 
                        onClick={() => handleClick(Image3)} 
                    />
                    <img 
                        src={Image4} 
                        className={fullScreenImage === Image4 ? 'sub-image fullScreenImage' : 'sub-image'} 
                        alt="Sub image" 
                        onClick={() => handleClick(Image4)} 
                    />
                    <img 
                        src={Image5} 
                        className={fullScreenImage === Image5 ? 'sub-image fullScreenImage' : 'sub-image'} 
                        alt="Sub image" 
                        onClick={() => handleClick(Image5)} 
                    />
                </div>
            </section>
            <section className="installations__container">
                <div className="main__image__container">
                <img 
                        src={Image6} 
                        className={fullScreenImage === Image6 ? 'main__image fullScreenImage' : 'main__image'} 
                        alt="Main image" 
                        onClick={() => handleClick(Image6)} 
                    />
                </div>
                    <p className="installations__content">Retablo in sacris, 2010. Libro de Historia del Arte, objetos familiares donados, dimensiones variables.</p>
                <div className="sub__images__container">
                    <img 
                        src={Image7} 
                        className={fullScreenImage === Image7 ? 'sub-image fullScreenImage' : 'sub-image'} 
                        alt="Sub image" 
                        onClick={() => handleClick(Image7)} 
                    />
                </div>
            </section>
            <section className="installations__container">
                <div className="main__image__container">
                <img 
                        src={Image13} 
                        className={fullScreenImage === Image13 ? 'main__image fullScreenImage' : 'main__image'} 
                        alt="Main image" 
                        onClick={() => handleClick(Image13)} 
                    />
                </div>
                    <p className="installations__content">El objeto huérfano, 2018. Grabado sobre metal y tinta de imprenta, dimensiones variables.</p>
                <div className="sub__images__container">
                    <img 
                        src={Image8} 
                        className={fullScreenImage === Image8 ? 'sub-image fullScreenImage' : 'sub-image'} 
                        alt="Sub image" 
                        onClick={() => handleClick(Image8)} 
                    />
                    <img 
                        src={Image9} 
                        className={fullScreenImage === Image9 ? 'sub-image fullScreenImage' : 'sub-image'} 
                        alt="Sub image" 
                        onClick={() => handleClick(Image9)} 
                    />
                    <img 
                        src={Image10} 
                        className={fullScreenImage === Image10 ? 'sub-image fullScreenImage' : 'sub-image'} 
                        alt="Sub image" 
                        onClick={() => handleClick(Image10)} 
                    />
                    <img 
                        src={Image12} 
                        className={fullScreenImage === Image12 ? 'sub-image fullScreenImage' : 'sub-image'} 
                        alt="Sub image" 
                        onClick={() => handleClick(Image12)} 
                    />
                    <img 
                        src={Image14} 
                        className={fullScreenImage === Image14 ? 'sub-image fullScreenImage' : 'sub-image'} 
                        alt="Sub image" 
                        onClick={() => handleClick(Image14)} 
                    />
                    <img 
                        src={Image15} 
                        className={fullScreenImage === Image15 ? 'sub-image fullScreenImage' : 'sub-image'} 
                        alt="Sub image" 
                        onClick={() => handleClick(Image15)} 
                    />
                    <img 
                        src={Image16} 
                        className={fullScreenImage === Image16 ? 'sub-image fullScreenImage' : 'sub-image'} 
                        alt="Sub image" 
                        onClick={() => handleClick(Image16)} 
                    />
                    <img 
                        src={Image17} 
                        className={fullScreenImage === Image17 ? 'sub-image fullScreenImage' : 'sub-image'} 
                        alt="Sub image" 
                        onClick={() => handleClick(Image17)} 
                    />
                    <img 
                        src={Image18} 
                        className={fullScreenImage === Image18 ? 'sub-image fullScreenImage' : 'sub-image'} 
                        alt="Sub image" 
                        onClick={() => handleClick(Image18)} 
                    />
                </div>
            </section>
            <section className="installations__container">
                <div className="main__image__container">
                <img 
                        src={Image19} 
                        className={fullScreenImage === Image19 ? 'main__image fullScreenImage' : 'main__image'} 
                        alt="Main image" 
                        onClick={() => handleClick(Image19)} 
                    />
                </div>
                    <p className="installations__content">Caja con objetos, 2010. Objetos donados, metal, tinta de imprenta, 60 cm cúbicos. Objetos donados por internos de la Prisión de Quivicán, la Habana, Cuba.</p>
                <div className="sub__images__container">
                    <img 
                        src={Image20} 
                        className={fullScreenImage === Image20 ? 'sub-image fullScreenImage' : 'sub-image'} 
                        alt="Sub image" 
                        onClick={() => handleClick(Image20)} 
                    />
                    <img 
                        src={Image21} 
                        className={fullScreenImage === Image21 ? 'sub-image fullScreenImage' : 'sub-image'} 
                        alt="Sub image" 
                        onClick={() => handleClick(Image21)} 
                    />
                    <img 
                        src={Image22} 
                        className={fullScreenImage === Image22 ? 'sub-image fullScreenImage' : 'sub-image'} 
                        alt="Sub image" 
                        onClick={() => handleClick(Image22)} 
                    />
                    <img 
                        src={Image23} 
                        className={fullScreenImage === Image23 ? 'sub-image fullScreenImage' : 'sub-image'} 
                        alt="Sub image" 
                        onClick={() => handleClick(Image23)} 
                    />
                </div>
            </section>
            <section className="installations__container">
                <div className="main__image__container">
                <img 
                        src={Image25} 
                        className={fullScreenImage === Image25 ? 'main__image fullScreenImage' : 'main__image'} 
                        alt="Main image" 
                        onClick={() => handleClick(Image25)} 
                    />
                </div>
                    <p className="installations__content">Sujetos, 2011. Madera, fragmentos de objetos (grafito, lápiz labial, uñas, heces fecales de gato, fotografía, papel de lija, entre otros), dimensiones variables.</p>
                <div className="sub__images__container">
                <img 
                        src={Image24} 
                        className={fullScreenImage === Image24 ? 'sub-image fullScreenImage' : 'sub-image'} 
                        alt="Sub image" 
                        onClick={() => handleClick(Image24)} 
                    />
                </div>
            </section>
            <section className="installations__container">
                <div className="main__image__container">
                <img 
                        src={Image26} 
                        className={fullScreenImage === Image26 ? 'main__image fullScreenImage' : 'main__image'} 
                        alt="Main image" 
                        onClick={() => handleClick(Image26)} 
                    />
                </div>
                    <p className="installations__content">ST, 2010. Madera y objetos personales, dimensiones variables.</p>
                <div className="sub__images__container">
                <img 
                        src={Image27} 
                        className={fullScreenImage === Image27 ? 'sub-image fullScreenImage' : 'sub-image'} 
                        alt="Sub image" 
                        onClick={() => handleClick(Image27)} 
                    />
                </div>
            </section>
            <section className="installations__container">
                <div className="main__image__container">
                <img 
                        src={Image29} 
                        className={fullScreenImage === Image29 ? 'main__image fullScreenImage' : 'main__image'} 
                        alt="Main image" 
                        onClick={() => handleClick(Image29)} 
                    />
                </div>
                    <p className="installations__content">Qué hacer con una casa sin alma, 2018. Video proyección sobre cristal, dimensiones variables.</p>
                <div className="sub__images__container">
                    <img 
                        src={Image28} 
                        className={fullScreenImage === Image28 ? 'sub-image fullScreenImage' : 'sub-image'} 
                        alt="Sub image" 
                        onClick={() => handleClick(Image28)} 
                    />
                    <img 
                        src={Image30} 
                        className={fullScreenImage === Image30 ? 'sub-image fullScreenImage' : 'sub-image'} 
                        alt="Sub image" 
                        onClick={() => handleClick(Image30)} 
                    />
                    <img 
                        src={Image31} 
                        className={fullScreenImage === Image31 ? 'sub-image fullScreenImage' : 'sub-image'} 
                        alt="Sub image" 
                        onClick={() => handleClick(Image31)} 
                    />
                </div>
            </section>
            <section className="installations__container">
                <div className="main__image__container">
                <img 
                        src={Image32} 
                        className={fullScreenImage === Image32 ? 'main__image fullScreenImage' : 'main__image'} 
                        alt="Main image" 
                        onClick={() => handleClick(Image32)} 
                    />
                </div>
                    <p className="installations__content">S/T (Dos), 2014. Video proyección, repisa de cristal y metal, dimensiones variables.</p>
                {/* <div className="sub__images__container">
                    <img src={Image28} className="sub-image" alt="Sub Image 1" />
                    <img src={Image30} className="sub-image" alt="Sub Image 1" />
                    <img src={Image31} className="sub-image" alt="Sub Image 1" />
                </div> */}
            </section>
            <section className="installations__container">
                <div className="main__image__container">
                <img 
                        src={Image39} 
                        className={fullScreenImage === Image39 ? 'main__image fullScreenImage' : 'main__image'} 
                        alt="Main image" 
                        onClick={() => handleClick(Image39)} 
                    />
                </div>
                    <p className="installations__content">Nadar en seco, 2014. Tela, fragmentos de vidrios, fragmentos de imágenes, muebles de madera, dimensiones variables.</p>
                <div className="sub__images__container">
                    {/* <img src={Image33} className="sub-image" alt="Sub Image 1" /> */}
                    <img 
                        src={Image34} 
                        className={fullScreenImage === Image34 ? 'sub-image fullScreenImage' : 'sub-image'} 
                        alt="Sub image" 
                        onClick={() => handleClick(Image34)} 
                    />
                    <img 
                        src={Image35} 
                        className={fullScreenImage === Image35 ? 'sub-image fullScreenImage' : 'sub-image'} 
                        alt="Sub image" 
                        onClick={() => handleClick(Image35)} 
                    />
                    <img 
                        src={Image36} 
                        className={fullScreenImage === Image36 ? 'sub-image fullScreenImage' : 'sub-image'} 
                        alt="Sub image" 
                        onClick={() => handleClick(Image36)} 
                    />
                    <img 
                        src={Image37} 
                        className={fullScreenImage === Image37 ? 'sub-image fullScreenImage' : 'sub-image'} 
                        alt="Sub image" 
                        onClick={() => handleClick(Image37)} 
                    />
                    <img 
                        src={Image38} 
                        className={fullScreenImage === Image38 ? 'sub-image fullScreenImage' : 'sub-image'} 
                        alt="Sub image" 
                        onClick={() => handleClick(Image38)} 
                    />
                </div>
            </section>
            <section className="installations__container">
                <div className="main__image__container">
                <img 
                        src={Image41} 
                        className={fullScreenImage === Image41 ? 'main__image fullScreenImage' : 'main__image'} 
                        alt="Main image" 
                        onClick={() => handleClick(Image41)} 
                    />
                </div>
                    <p className="installations__content">Soledad, 2015. Registro en texto de todos los objetos de mi casa en San Antonio de los Baños, Artemisa, Cuba, 20 x 20cm.</p>
                <div className="sub__images__container">
                <img 
                        src={Image40} 
                        className={fullScreenImage === Image40 ? 'sub-image fullScreenImage' : 'sub-image'} 
                        alt="Sub image" 
                        onClick={() => handleClick(Image40)} 
                    />
                </div>
            </section>
            <section className="installations__container">
                <div className="main__image__container">
                <img 
                        src={Image44} 
                        className={fullScreenImage === Image44 ? 'main__image fullScreenImage' : 'main__image'} 
                        alt="Main image" 
                        onClick={() => handleClick(Image44)} 
                    />
                </div>
                    <p className="installations__content">A (rl) mas Blancas, 2019. Tinta, papel y cristales rotos, dimensiones variables.</p>
                <div className="sub__images__container">
                    <img 
                        src={Image42} 
                        className={fullScreenImage === Image42 ? 'sub-image fullScreenImage' : 'sub-image'} 
                        alt="Sub image" 
                        onClick={() => handleClick(Image42)} 
                    />
                    <img 
                        src={Image43} 
                        className={fullScreenImage === Image43 ? 'sub-image fullScreenImage' : 'sub-image'} 
                        alt="Sub image" 
                        onClick={() => handleClick(Image43)} 
                    />
                </div>
            </section>
        </div>
        <ContactBtn />
        </>
    )
}

export default Installations