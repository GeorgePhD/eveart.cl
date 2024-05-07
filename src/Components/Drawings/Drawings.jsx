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
import Image22 from '../../images/ST, 2016, Cuba. Tinta sobre papel, 86,5 x 66 cm. (3).png'
import Image23 from '../../images/ST, 2017, Chile. Tinta sobre papel, 86,5 x 66 cm. (4).png'
import Image24 from '../../images/Viaje a San Làzaro, 2017, Cuba. Tinta sobre papel, 86,5 x 66 cm..png'
{/* from here */}
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

        <div className='grid__layout__drawings'>
            <section className="drawing__container">
                <img className='drawing__img' src={Image1} alt="El vigilante" />
                <p className="drawing__p">EL VIGILANTE - 2018 - Tinta sobre papel - 90 x 75 cm</p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image2} alt="El vigilante" />
                <p className="drawing__p">Fe, 2016. Lápiz de color sobre cartulina, 50 x 70 cm</p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image3} alt="El vigilante" />
                <p className="drawing__p">Librero, 2016. Tinta sobre cartulina, 21 x 30 cm</p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image4} alt="El vigilante" />
                <p className="drawing__p">Librero, 2016. Tinta sobre cartulina, 21 x 30 cm</p>
            </section>
            {/* <section className="drawing__container">
                <img className='drawing__img' src={Image30} alt="El vigilante" />
                <p className="drawing__p">repeated</p>
            </section> */}
            <section className="drawing__container">
                <img className='drawing__img' src={Image6} alt="El vigilante" />
                <p className="drawing__p">Librero, 2016. Tinta sobre cartulina, 21 x 30 cm</p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image7} alt="El vigilante" />
                <p className="drawing__p">Librero, 2016. Tinta sobre cartulina, 21 x 30 cm</p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image8} alt="El vigilante" />
                <p className="drawing__p">Librero, 2016. Tinta sobre cartulina, 21 x 30 cm</p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image9} alt="El vigilante" />
                <p className="drawing__p">Librero, 2016. Tinta sobre cartulina, 21 x 30 cm</p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image10} alt="El vigilante" />
                <p className="drawing__p">Librero, 2016. Tinta sobre cartulina, 21 x 30 cm</p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image11} alt="El vigilante" />
                <p className="drawing__p"></p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image12} alt="El vigilante" />
                <p className="drawing__p"></p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image13} alt="El vigilante" />
                <p className="drawing__p"></p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image15} alt="El vigilante" />
                <p className="drawing__p"></p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image14} alt="El vigilante" />
                <p className="drawing__p"></p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image16} alt="El vigilante" />
                <p className="drawing__p"></p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image17} alt="El vigilante" />
                <p className="drawing__p"></p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image18} alt="El vigilante" />
                <p className="drawing__p"></p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image19} alt="El vigilante" />
                <p className="drawing__p"></p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image20} alt="El vigilante" />
                <p className="drawing__p"></p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image21} alt="El vigilante" />
                <p className="drawing__p"></p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image22} alt="El vigilante" />
                <p className="drawing__p"></p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image23} alt="El vigilante" />
                <p className="drawing__p"></p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image24} alt="El vigilante" />
                <p className="drawing__p"></p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image26} alt="El vigilante" />
                <p className="drawing__p"></p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image27} alt="El vigilante" />
                <p className="drawing__p"></p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image28} alt="El vigilante" />
                <p className="drawing__p"></p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image29} alt="El vigilante" />
                <p className="drawing__p"></p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image5} alt="El vigilante" />
                <p className="drawing__p">Librero, 2016. Tinta sobre cartulina, 21 x 30 cm</p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image31} alt="El vigilante" />
                <p className="drawing__p"></p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image32} alt="El vigilante" />
                <p className="drawing__p"></p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image33} alt="El vigilante" />
                <p className="drawing__p"></p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image34} alt="El vigilante" />
                <p className="drawing__p"></p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image37} alt="El vigilante" />
                <p className="drawing__p"></p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image38} alt="El vigilante" />
                <p className="drawing__p"></p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image39} alt="El vigilante" />
                <p className="drawing__p"></p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image40} alt="El vigilante" />
                <p className="drawing__p"></p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image41} alt="El vigilante" />
                <p className="drawing__p"></p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image42} alt="El vigilante" />
                <p className="drawing__p"></p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image43} alt="El vigilante" />
                <p className="drawing__p"></p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image44} alt="El vigilante" />
                <p className="drawing__p"></p>
            </section>
        </div>
    )
}

export default Drawings