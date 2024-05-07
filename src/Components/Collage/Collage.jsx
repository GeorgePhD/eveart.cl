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

        <div className='grid__layout'>
            <section className="collage__container">
                <img className='collage__img' src={Image1} alt="El vigilante" />
                <p className="collage__p">description</p>
            </section>
            <section className="collage__container">
                <img className='collage__img' src={Image2} alt="El vigilante" />
                <p className="collage__p">Description</p>
            </section>
            <section className="collage__container">
                <img className='collage__img' src={Image3} alt="El vigilante" />
                <p className="collage__p">Description</p>
            </section>
            <section className="collage__container">
                <img className='collage__img' src={Image4} alt="El vigilante" />
                <p className="collage__p">Description</p>
            </section>
            <section className="collage__container">
                <img className='collage__img' src={Image5} alt="El vigilante" />
                <p className="collage__p">Description</p>
            </section>
            <section className="collage__container">
                <img className='collage__img' src={Image6} alt="El vigilante" />
                <p className="collage__p">Description</p>
            </section>
            <section className="collage__container">
                <img className='collage__img' src={Image7} alt="El vigilante" />
                <p className="collage__p">Description</p>
            </section>
            <section className="collage__container">
                <img className='collage__img' src={Image8} alt="El vigilante" />
                <p className="collage__p">Description</p>
            </section>
            <section className="collage__container">
                <img className='collage__img' src={Image9} alt="El vigilante" />
                <p className="collage__p">Description</p>
            </section>
            <section className="collage__container">
                <img className='collage__img' src={Image10} alt="El vigilante" />
                <p className="collage__p">Description</p>
            </section>
            <section className="collage__container">
                <img className='collage__img' src={Image11} alt="El vigilante" />
                <p className="collage__p"></p>
            </section>
            <section className="collage__container">
                <img className='collage__img' src={Image12} alt="El vigilante" />
                <p className="collage__p">Description</p>
            </section>
            <section className="collage__container">
                <img className='collage__img' src={Image13} alt="El vigilante" />
                <p className="collage__p">Description</p>
            </section>
            <section className="collage__container">
                <img className='collage__img' src={Image14} alt="El vigilante" />
                <p className="collage__p">Description</p>
            </section>
            <section className="collage__container">
                <img className='collage__img' src={Image15} alt="El vigilante" />
                <p className="collage__p">Description</p>
            </section>
            <section className="collage__container">
                <img className='collage__img' src={Image16} alt="El vigilante" />
                <p className="collage__p">Description</p>
            </section>
            <section className="collage__container">
                <img className='collage__img' src={Image17} alt="El vigilante" />
                <p className="collage__p">Description</p>
            </section>
            <section className="collage__container">
                <img className='collage__img' src={Image18} alt="El vigilante" />
                <p className="collage__p">Description</p>
            </section>
            <section className="collage__container">
                <img className='collage__img' src={Image19} alt="El vigilante" />
                <p className="collage__p">Description</p>
            </section>
            <section className="collage__container">
                <img className='collage__img' src={Image20} alt="El vigilante" />
                <p className="collage__p">Description</p>
            </section>
            <section className="collage__container">
                <img className='collage__img' src={Image21} alt="El vigilante" />
                <p className="collage__p">Description</p>
            </section>

        </div>
    )
}

export default Collage