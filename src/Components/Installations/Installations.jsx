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
import Image33 from '../../images/InstallationsOptimized/optimized10/installations (33).png'
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

import { useEffect } from 'react';

const Installations = () => {

    useEffect(() => {
        const handleScroll = () => {
            const items = document.querySelectorAll('.installations__container');
    
            items.forEach((item) => {
                const itemTop = item.getBoundingClientRect().top;
    
                // Adjust this value based on when you want the animation to start
                if (itemTop < window.innerHeight * 0.5) {
                    item.style.opacity = 1;
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

        <div className="grid-container">
            <section className="installations__container">
                <div className="main__image__container">
                    <img src={Image1} className="main__image" alt="Main image" />
                </div>
                    <p className="installations__content">La poesía se hace tachando, 2015. Fragmentos de obras, objetos encontrados, dimensiones variables.</p>
                <div className="sub__images__container">
                    <img src={Image2} className="sub-image" alt="Sub Image 1" />
                    <img src={Image3} className="sub-image" alt="Sub Image 2" />
                    <img src={Image4} className="sub-image" alt="Sub Image 3" />
                    <img src={Image5} className="sub-image" alt="Sub Image 4" />
                </div>
            </section>
            <section className="installations__container">
                <div className="main__image__container">
                    <img src={Image6} className="main__image" alt="Main image" />
                </div>
                    <p className="installations__content">Retablo in sacris, 2010. Libro de Historia del Arte, objetos familiares donados, dimensiones variables.</p>
                <div className="sub__images__container">
                    <img src={Image7} className="sub-image" alt="Sub Image 1" />
                </div>
            </section>
            <section className="installations__container">
                <div className="main__image__container">
                    <img src={Image13} className="main__image" alt="Main image" />
                </div>
                    <p className="installations__content">El objeto huérfano, 2018. Grabado sobre metal y tinta de imprenta, dimensiones variables.</p>
                <div className="sub__images__container">
                    <img src={Image8} className="sub-image sub9" alt="Sub Image 1" />
                    <img src={Image9} className="sub-image sub9" alt="Sub Image 2" />
                    <img src={Image10} className="sub-image sub9" alt="Sub Image 3" />
                    {/* <img src={Image11} className="sub-image" alt="Sub Image 4" /> */}
                    <img src={Image12} className="sub-image sub9" alt="Sub Image 4" />
                    <img src={Image14} className="sub-image sub9" alt="Sub Image 4" />
                    <img src={Image15} className="sub-image sub9" alt="Sub Image 4" />
                    <img src={Image16} className="sub-image sub9" alt="Sub Image 4" />
                    <img src={Image17} className="sub-image sub9" alt="Sub Image 4" />
                    <img src={Image18} className="sub-image sub9" alt="Sub Image 4" />
                </div>
            </section>
            <section className="installations__container">
                <div className="main__image__container">
                    <img src={Image19} className="main__image" alt="Main image" />
                </div>
                    <p className="installations__content">Caja con objetos, 2010. Objetos donados, metal, tinta de imprenta, 60 cm cúbicos. Objetos donados por internos de la Prisión de Quivicán, la Habana, Cuba.</p>
                <div className="sub__images__container">
                    <img src={Image20} className="sub-image" alt="Sub Image 1" />
                    <img src={Image21} className="sub-image" alt="Sub Image 2" />
                    <img src={Image22} className="sub-image" alt="Sub Image 3" />
                    <img src={Image23} className="sub-image" alt="Sub Image 4" />
                </div>
            </section>
            <section className="installations__container">
                <div className="main__image__container">
                    <img src={Image25} className="main__image" alt="Main image" />
                </div>
                    <p className="installations__content">Sujetos, 2011. Madera, fragmentos de objetos (grafito, lápiz labial, uñas, heces fecales de gato, fotografía, papel de lija, entre otros), dimensiones variables.</p>
                <div className="sub__images__container">
                    <img src={Image24} className="sub-image" alt="Sub Image 1" />
                </div>
            </section>
            <section className="installations__container">
                <div className="main__image__container">
                    <img src={Image26} className="main__image" alt="Main image" />
                </div>
                    <p className="installations__content">ST, 2010. Madera y objetos personales, dimensiones variables.</p>
                <div className="sub__images__container">
                    <img src={Image27} className="sub-image" alt="Sub Image 1" />
                </div>
            </section>
            <section className="installations__container">
                <div className="main__image__container">
                    <img src={Image29} className="main__image" alt="Main image" />
                </div>
                    <p className="installations__content">Qué hacer con una casa sin alma, 2018. Video proyección sobre cristal, dimensiones variables.</p>
                <div className="sub__images__container">
                    <img src={Image28} className="sub-image" alt="Sub Image 1" />
                    <img src={Image30} className="sub-image" alt="Sub Image 1" />
                    <img src={Image31} className="sub-image" alt="Sub Image 1" />
                </div>
            </section>
            <section className="installations__container">
                <div className="main__image__container">
                    <img src={Image32} className="main__image" alt="Main image" />
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
                    <img src={Image39} className="main__image" alt="Main image" />
                </div>
                    <p className="installations__content">Nadar en seco, 2014. Tela, fragmentos de vidrios, fragmentos de imágenes, muebles de madera, dimensiones variables.</p>
                <div className="sub__images__container">
                    <img src={Image33} className="sub-image" alt="Sub Image 1" />
                    <img src={Image35} className="sub-image" alt="Sub Image 1" />
                    <img src={Image36} className="sub-image" alt="Sub Image 1" />
                    <img src={Image37} className="sub-image" alt="Sub Image 1" />
                    <img src={Image38} className="sub-image" alt="Sub Image 1" />
                    <img src={Image34} className="sub-image" alt="Sub Image 1" />
                </div>
            </section>
            <section className="installations__container">
                <div className="main__image__container">
                    <img src={Image41} className="main__image" alt="Main image" />
                </div>
                    <p className="installations__content">Soledad, 2015. Registro en texto de todos los objetos de mi casa en San Antonio de los Baños, Artemisa, Cuba, 20 x 20cm.</p>
                <div className="sub__images__container">
                    <img src={Image40} className="sub-image" alt="Sub Image 1" />
                </div>
            </section>
            <section className="installations__container">
                <div className="main__image__container">
                    <img src={Image44} className="main__image" alt="Main image" />
                </div>
                    <p className="installations__content">A (rl) mas Blancas, 2019. Tinta, papel y cristales rotos, dimensiones variables.</p>
                <div className="sub__images__container">
                    <img src={Image42} className="sub-image" alt="Sub Image 1" />
                    <img src={Image43} className="sub-image" alt="Sub Image 1" />
                </div>
            </section>
        </div>
    )
}

export default Installations