import './drawings.css';
import Image1 from '../../images/EL VIGILANTE - 2018 - Tinta sobre papel - 90 x 75 cm..png'
import Image2 from '../../images/Fe, 2016. Lápiz de color sobre cartulina, 50 x 70 cm..png'
import Image3 from '../../images/Librero, 2016. Tinta sobre cartulina, 21 x 30 cm..png'
import Image4 from '../../images/METRO DE VILLA ALEMANA - 2018 - Tinta sobre papel - 100 x 80 cm..png'
import Image5 from '../../images/Paisaje sin nombre, 2017, Chile. Tinta sobre papel, 64 x 56 cm..png'
import Image6 from '../../images/RINCÓN - 2017 - Tinta sobre papel - 86,5 x 66 cm..png'
import Image7 from '../../images/ST, 2016, Cuba. Tinta sobre papel, 86,5 x 66 cm. (3).png'
import Image8 from '../../images/ST, 2016. Tinta sobre lienzo, 38 x 38 cm..png'
import Image9 from '../../images/ST, 2017, Chile. Tinta sobre papel, 86,5 x 66 cm..png'
import Image10 from '../../images/ST, 2016, Cuba. Tinta sobre papel, 86,5 x 66 cm..png'
import Image11 from '../../images/drawing (1).png'
import Image12 from '../../images/drawing (2).png'
import Image13 from '../../images/drawing (3).png'
import Image14 from '../../images/drawing (4).png'
import Image15 from '../../images/drawing (8).png'
import Image16 from '../../images/drawing (13).png'
import Image17 from '../../images/drawing (14).png'
import Image18 from '../../images/drawing (15).png'
import Image19 from '../../images/Sobre el puente, 2017, Chile. Tinta sobre papel, 86,5 x 66 cm..png'
import Image20 from '../../images/Sobre mi, 2017, Chile. Tinta sobre papel, 86,5 x 66 cm..png'
import Image21 from '../../images/ST, 2016, Cuba. Tinta sobre papel, 86,5 x 66 cm. (2).png'
import Image23 from '../../images/ST, 2017, Chile. Tinta sobre papel, 86,5 x 66 cm. (4).png'
import Image24 from '../../images/Viaje a San Làzaro, 2017, Cuba. Tinta sobre papel, 86,5 x 66 cm..png'
{/* from here */ }
import Image26 from '../../images/Despertador, 2014. Grafito sobre cartulina, 50 x 70 cm..png'
import Image27 from '../../images/drawing (5).png'
import Image28 from '../../images/drawing (6).png'
import Image29 from '../../images/drawing (7).png'
/* import Image30 from '../../images/drawing (8).png' */
import Image31 from '../../images/drawing (9).png'
import Image32 from '../../images/drawing (10).png'
import Image33 from '../../images/drawing (11).png'
import Image34 from '../../images/drawing (12).png'
/* import Image35 from '../../images/drawing (13).png'
import Image36 from '../../images/drawing (15).png' */
import Image37 from '../../images/drawing (16).png'
import Image38 from '../../images/drawing (17).png'
import Image39 from '../../images/Paisaje sin nombre, 2017, Chile. Tinta sobre papel, 64 x 56 cm..png'
import Image40 from '../../images/Pose III, 2017, Chile. Tinta sobre papel, 56 x 43 cm..png'
import Image41 from '../../images/Pose IV, 2017, Chile. Tinta sobre papel, 56 x 43 cm..png'
import Image42 from '../../images/Pose V, 2017, Chile. Tinta sobre papel, 56 x 43 cm..png'
import Image43 from '../../images/SIN TÍTULO (TROCADOS) - 2018 - Tinta sobre papel, 100 x 80 cm..png'
import Image44 from '../../images/STOH5708.png'
import { useEffect } from 'react';
import ContactBtn from '../ContactBtn/ContactBtn'

const Drawings = () => {

    useEffect(() => {
        const handleScroll = () => {
            const items = document.querySelectorAll('.drawing__container');

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
        <>
        <div className='grid__layout__drawings'>
            <section className="drawing__container">
                <img className='drawing__img' src={Image1} alt="dibujo manuscrito" />
                <p className="drawing__p">El vigilante, de la serie Dibujos Manuscritos, 2018. Tinta sobre papel, 90 x 75 cm.</p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image2} alt="dibujo manuscrito" />
                <p className="drawing__p">Fe, de la serie Dibujos Manuscritos, 2016.
                    Lápiz de color sobre cartulina, 50 cm x 70 cm.
                </p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image3} alt="dibujo manuscrito" />
                <p className="drawing__p">Librero, de la serie Dibujos Manuscritos, 2016. Tinta sobre cartulina, 21 x 30 cm.</p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image4} alt="dibujo manuscrito" />
                <p className="drawing__p">Metro de Villa Alemana, de la serie Dibujos Manuscritos, 2018. Tinta sobre papel, 100 x 80 cm.</p>
            </section>
            {/* <section className="drawing__container">
                <img className='drawing__img' src={Image30} alt="dibujo manuscrito" />
                <p className="drawing__p">repeated</p>
            </section> */}
            <section className="drawing__container">
                <img className='drawing__img' src={Image6} alt="dibujo manuscrito" />
                <p className="drawing__p">RINCÓN, de la serie Dibujos Manuscritos, 2017. Tinta sobre papel, 86,5 x 66 cm.</p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image7} alt="dibujo manuscrito" />
                <p className="drawing__p">ST, de la serie Dibujos Manuscritos, 2016. Tinta sobre papel, 86,5 x 66 cm.</p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image8} alt="dibujo manuscrito" />
                <p className="drawing__p">ST, de la serie Dibujos Manuscritos, 2016. Tinta sobre lienzo, 38 x 38 cm.</p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image9} alt="dibujo manuscrito" />
                <p className="drawing__p">ST, de la serie Dibujos Manuscritos, 2017.
                    Tinta sobre papel, 86,5 x 66 cm.
                </p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image10} alt="dibujo manuscrito" />
                <p className="drawing__p">ST, de la serie Dibujos Manuscritos, 2016. Tinta sobre papel, 86,5 x 66 cm.</p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image11} alt="dibujo manuscrito" />
                <p className="drawing__p">Los techos de Santo Suárez, de la serie Dibujos Manuscritos, 2019.
                    Tinta sobre papel, 120 cm x 80 cm.
                </p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image12} alt="dibujo manuscrito" />
                <p className="drawing__p">Viaje al Rincón, de la serie Dibujos Manuscritos, 2017.
                    Tinta sobre papel, 120 cm x 80 cm.
                </p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image13} alt="dibujo manuscrito" />
                <p className="drawing__p">ST, de la serie Dibujos Manuscritos, 2017.
                    Tinta sobre papel, 86,5 x 66 cm.
                </p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image15} alt="dibujo manuscrito" />
                <p className="drawing__p">ST/XXXVII, de la serie Estudios para una armadura, 2020.
                    Tinta sobre cartulina, 27 cm x 37,5 cm.
                </p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image14} alt="dibujo manuscrito" />
                <p className="drawing__p">Autorretrato con sombra sin velo, de la serie Dibujos Manuscritos, 2017.
                    Tinta sobre papel, 86,5 x 66cm.
                </p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image16} alt="dibujo manuscrito" />
                <p className="drawing__p">ST/XVIII, de la serie Estudios para una armadura, 2020.
                    Tinta sobre cartulina, 34 cm x 24 cm.
                </p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image17} alt="dibujo manuscrito" />
                <p className="drawing__p">ST/XVII, de la serie Estudios para una armadura, 2020.
Tinta sobre cartulina, 34 cm x 24 cm.
</p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image18} alt="dibujo manuscrito" />
                <p className="drawing__p">ST/XV, de la serie Estudios para una armadura, 2020.
Tinta sobre cartulina, 34 cm x 24 cm.
</p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image19} alt="dibujo manuscrito" />
                <p className="drawing__p">Sobre el puente, de la serie Dibujos Manuscritos, 2017.
Tinta sobre papel, 86,5 cm x 66 cm.
</p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image20} alt="dibujo manuscrito" />
                <p className="drawing__p">Sobre mí, de la serie Dibujos Manuscritos, 2017.
 Tinta sobre papel, 86,5 cm x 66 cm.
</p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image21} alt="dibujo manuscrito" />
                <p className="drawing__p">ST, de la serie Dibujos Manuscritos, 2016. Tinta sobre papel, 86,5 x 66 cm.</p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image23} alt="dibujo manuscrito" />
                <p className="drawing__p">ST/II, de la serie Dibujos Manuscritos, 2017.
 Tinta sobre papel, 86,5 cm x 66 cm.
</p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image24} alt="dibujo manuscrito" />
                <p className="drawing__p">Viaje a San Lázaro, de la serie Dibujos Manuscritos, 2017. Tinta sobre papel, 86,5 x 66 cm.</p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image26} alt="dibujo manuscrito" />
                <p className="drawing__p">Despertador, de la serie Dibujos Manuscritos, 2014. Grafito sobre cartulina, 50 x 70 cm.</p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image27} alt="dibujo manuscrito" />
                <p className="drawing__p">ST/XLIII, de la serie Estudios para una armadura, 2020.
Tinta sobre cartulina, 27 cm x 37,5 cm.
</p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image28} alt="dibujo manuscrito" />
                <p className="drawing__p">ST/XLII, de la serie Estudios para una armadura, 2020.
Tinta sobre cartulina, 27 cm x 37,5 cm.
</p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image29} alt="dibujo manuscrito" />
                <p className="drawing__p">ST/XLI, de la serie Estudios para una armadura, 2020.
Tinta sobre cartulina, 27 cm x 37,5 cm.
</p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image5} alt="dibujo manuscrito" />
                <p className="drawing__p">Paisaje sin nombre, de la serie Dibujos Manuscritos, 2017. Tinta sobre papel, 64 x 56 cm.</p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image31} alt="dibujo manuscrito" />
                <p className="drawing__p">ST/XXXVI, de la serie Estudios para una armadura, 2020.
Tinta sobre cartulina, 27 cm x 37,5 cm.
</p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image32} alt="dibujo manuscrito" />
                <p className="drawing__p">ST/XXVII, de la serie Estudios para una armadura, 2020.
Tinta sobre cartulina, 27 cm x 37,5 cm.
</p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image33} alt="dibujo manuscrito" />
                <p className="drawing__p">ST/XXI, de la serie Estudios para una armadura, 2020.
Tinta sobre cartulina, 27 cm x 37,5 cm.
</p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image34} alt="dibujo manuscrito" />
                <p className="drawing__p">ST/XIX, de la serie Estudios para una armadura, 2020.
Tinta sobre cartulina, 34 cm x 24 cm.
</p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image37} alt="dibujo manuscrito" />
                <p className="drawing__p">ST, de la serie Dibujos Manuscritos, 2020.
Tinta sobre cartulina, 37,5 cm x 53,5 cm.
</p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image38} alt="dibujo manuscrito" />
                <p className="drawing__p">Sombras, de la serie Dibujos Manuscritos, 2020.
Tinta sobre cartulina, 37,5 cm x 53,5 cm cada uno.
</p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image39} alt="dibujo manuscrito" />
                <p className="drawing__p">Paisaje sin nombre, de la serie Dibujos Manuscritos, 2017. Tinta sobre papel, 64 x 56 cm.</p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image40} alt="dibujo manuscrito" />
                <p className="drawing__p">Pose III, de la serie Dibujos Manuscritos, 2017.
Tinta sobre papel, 56 cm x 43 cm.
</p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image41} alt="dibujo manuscrito" />
                <p className="drawing__p">Pose IV, de la serie Dibujos Manuscritos, 2017. 
Tinta sobre papel, 56 cm x 43 cm.
</p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image42} alt="dibujo manuscrito" />
                <p className="drawing__p">Pose V, de la serie Dibujos Manuscritos, 2017. 
Tinta sobre papel, 56 cm x 43 cm.
</p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image43} alt="dibujo manuscrito" />
                <p className="drawing__p">ST (Trocados), de la serie Dibujos Manuscritos, 2018.
Tinta sobre papel, 100 cm x 80 cm.
</p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image44} alt="dibujo manuscrito" />
                <p className="drawing__p">Tres momentos, de la serie Dibujos Manuscritos, 2020.
Tinta sobre cartulina, 37,5 cm x 53,5 cm.
</p>
            </section>
        </div>
            <ContactBtn />
        </>
    )
}

export default Drawings