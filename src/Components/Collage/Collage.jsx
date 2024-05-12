import './collage.css';
import Image1 from '../../images/collage (1).png'
import Image2 from '../../images/collage (2).png'
import Image3 from '../../images/collage (3).png'
import Image4 from '../../images/collage (4).png'
import Image5 from '../../images/collage (5).png'
import Image6 from '../../images/collage (6).png'
import Image7 from '../../images/collage (7).png'
import Image8 from '../../images/collage (8).png'
import Image9 from '../../images/collage (9).png'
import Image10 from '../../images/collage (10).png'
import Image11 from '../../images/collage (11).png'
import Image12 from '../../images/collage (12).png'
import Image13 from '../../images/collage (13).png'
import Image14 from '../../images/collage (14).png'
import Image15 from '../../images/collage (15).png'
import Image16 from '../../images/collage (16).png'
import Image17 from '../../images/collage (17).png'
import Image18 from '../../images/collage (18).png'
import Image19 from '../../images/collage (19).png'
import Image20 from '../../images/collage (20).png'
import Image21 from '../../images/collage (21).png'
import { useEffect } from 'react';

const Collage = () => {

    useEffect(() => {
        const handleScroll = () => {
            const items = document.querySelectorAll('.collage__container');

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

        <div className='grid__layout__collage'>
            <section className="collage__container">
                <img className='collage__img' src={Image1} alt="collage" />
                <p className="collage__p">La poesía se hace tachando XXXIII, 2013. Madera, fósforo, dado y fotografías
                    15 cm x 22,5 cm.</p>
            </section>
            <section className="collage__container">
                <img className='collage__img' src={Image2} alt="collage" />
                <p className="collage__p">La poesía se hace tachando III, 2013. Recortes de revista y plástico, 10 cm x 10 cm.</p>
            </section>
            <section className="collage__container">
                <img className='collage__img' src={Image3} alt="collage" />
                <p className="collage__p">La poesía se hace tachando VII, 2013. Recortes de revista, cinta adhesiva, cartón, 10 cm x 15 cm.</p>
            </section>
            <section className="collage__container">
                <img className='collage__img' src={Image4} alt="collage" />
                <p className="collage__p">La poesía se hace tachando VI, 2013. Recortes de revista, tinta y cartón, 11 cm x 14,5 cm.</p>
            </section>
            <section className="collage__container">
                <img className='collage__img' src={Image5} alt="collage" />
                <p className="collage__p">La poesía se hace tachando IX, 2013. Vidrio, plástico y recortes de láminas de libros de Historia del Arte , 12 cm x 14 cm.</p>
            </section>
            <section className="collage__container">
                <img className='collage__img' src={Image6} alt="collage" />
                <p className="collage__p">La poesía se hace tachando XIV, 2013. Recortes de revista, 14 cm x 21 cm.</p>
            </section>
            <section className="collage__container">
                <img className='collage__img' src={Image7} alt="collage" />
                <p className="collage__p">La poesía se hace tachando XIX, 2013. Recortes de fotografías, periódico, tinta y madera.</p>
            </section>
            <section className="collage__container">
                <img className='collage__img' src={Image8} alt="collage" />
                <p className="collage__p">La poesía se hace tachando, 2013. Recortes de revistas y de libros de historia del Arte, vidrio, madera y pintura acrílica, 30 cm x 20 cm.</p>
            </section>
            <section className="collage__container">
                <img className='collage__img' src={Image9} alt="collage" />
                <p className="collage__p">La poesía se hace tachando XXV, 2013. Lámina de libro, madera, 24 cm x 25 cm.</p>
            </section>
            <section className="collage__container">
                <img className='collage__img' src={Image10} alt="collage" />
                <p className="collage__p">Regalo catorce, 2014. Lámina de libro de Historia del Arte, tinta, pintura acrílica y papel,
                    18 cm x 22 cm.</p>
            </section>
            <section className="collage__container">
                <img className='collage__img' src={Image11} alt="collage" />
                <p className="collage__p">Regalo dieciséis, 2014. Lámina de libro de Historia del Arte, tinta y papel,
                    15,2 cm x 21,6 cm.</p>
            </section>
            <section className="collage__container">
                <img className='collage__img' src={Image12} alt="collage" />
                <p className="collage__p">Regalo diez, 2014. Lámina de libro de Historia del Arte, tinta y papel,
                    15,2 cm x 21,6 cm.</p>
            </section>
            <section className="collage__container">
                <img className='collage__img' src={Image13} alt="collage" />
                <p className="collage__p">Regalo doce, 2014. Lámina de libro de Historia del Arte, tinta y papel,
                    15,2 cm x 22 cm.</p>
            </section>
            <section className="collage__container">
                <img className='collage__img' src={Image14} alt="collage" />
                <p className="collage__p">Regalo dos, 2014. Lámina de libro de Historia del Arte, tinta y papel,
                    15,8 cm x 21 cm.</p>
            </section>
            <section className="collage__container">
                <img className='collage__img' src={Image15} alt="collage" />
                <p className="collage__p">Regalo nueve, 2014. Lámina de libro de Historia del Arte, tinta y papel,
                    17 cm x 25 cm.</p>
            </section>
            <section className="collage__container">
                <img className='collage__img' src={Image16} alt="collage" />
                <p className="collage__p">Regalo ocho, 2014. Lámina de libro de Historia del Arte, tinta y papel,
                    22 cm x 18,5 cm.</p>
            </section>
            <section className="collage__container">
                <img className='collage__img' src={Image17} alt="collage" />
                <p className="collage__p">Regalo seis, 2014. Lámina de libro de Historia del Arte, tinta y papel,
                    21 cm x 14,7 cm.</p>
            </section>
            <section className="collage__container">
                <img className='collage__img' src={Image18} alt="collage" />
                <p className="collage__p">Regalo trece, 2014. Láminas de libro de Historia del Arte, tinta y papel,
                    20 cm x 27 cm.</p>
            </section>
            <section className="collage__container">
                <img className='collage__img' src={Image19} alt="collage" />
                <p className="collage__p">Description</p>
            </section>
            <section className="collage__container">
                <img className='collage__img' src={Image20} alt="collage" />
                <p className="collage__p">Regalo uno, 2014. Lámina de libro de Historia del Arte, tinta y papel,
                    15,2 cm x 21,6 cm.</p>
            </section>
            <section className="collage__container">
                <img className='collage__img' src={Image21} alt="collage" />
                <p className="collage__p">La poesía se hace tachando, 2013. Vidrio, pintura de óleo, lámina de libre de Historia del Arte, 100 cm x 70 cm.</p>
            </section>
        </div>
    )
}

export default Collage