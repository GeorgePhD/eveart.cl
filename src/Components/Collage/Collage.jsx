import './collage.css';
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

        <div className='grid__layout'>
            <section className="collage__container">
                <img className='collage__img' src={Image1} alt="El vigilante" />
                <p className="collage__p">EL VIGILANTE - 2018 - Tinta sobre papel - 90 x 75 cm</p>
            </section>
            <section className="collage__container">
                <img className='collage__img' src={Image2} alt="El vigilante" />
                <p className="collage__p">Fe, 2016. Lápiz de color sobre cartulina, 50 x 70 cm</p>
            </section>
            <section className="collage__container">
                <img className='collage__img' src={Image3} alt="El vigilante" />
                <p className="collage__p">Librero, 2016. Tinta sobre cartulina, 21 x 30 cm</p>
            </section>
            <section className="collage__container">
                <img className='collage__img' src={Image4} alt="El vigilante" />
                <p className="collage__p">Librero, 2016. Tinta sobre cartulina, 21 x 30 cm</p>
            </section>
            <section className="collage__container">
                <img className='collage__img' src={Image5} alt="El vigilante" />
                <p className="collage__p">Librero, 2016. Tinta sobre cartulina, 21 x 30 cm</p>
            </section>
            <section className="collage__container">
                <img className='collage__img' src={Image6} alt="El vigilante" />
                <p className="collage__p">Librero, 2016. Tinta sobre cartulina, 21 x 30 cm</p>
            </section>
            <section className="collage__container">
                <img className='collage__img' src={Image7} alt="El vigilante" />
                <p className="collage__p">Librero, 2016. Tinta sobre cartulina, 21 x 30 cm</p>
            </section>
            <section className="collage__container">
                <img className='collage__img' src={Image8} alt="El vigilante" />
                <p className="collage__p">Librero, 2016. Tinta sobre cartulina, 21 x 30 cm</p>
            </section>
            <section className="collage__container">
                <img className='collage__img' src={Image9} alt="El vigilante" />
                <p className="collage__p">Librero, 2016. Tinta sobre cartulina, 21 x 30 cm</p>
            </section>
            <section className="collage__container">
                <img className='collage__img' src={Image10} alt="El vigilante" />
                <p className="collage__p">Librero, 2016. Tinta sobre cartulina, 21 x 30 cm</p>
            </section>

        </div>
    )
}

export default Collage