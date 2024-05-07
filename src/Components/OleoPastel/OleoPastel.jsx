import './oleopastel.css';
import Image1 from '../../images/oleo-pastel (1).png'
import Image2 from '../../images/oleo-pastel (2).png'
import Image3 from '../../images/oleo-pastel (3).png'
import Image4 from '../../images/oleo-pastel (4).png'
import Image5 from '../../images/oleo-pastel (5).png'
import Image6 from '../../images/oleo-pastel (6).png'
import Image7 from '../../images/oleo-pastel (7).png'
import Image8 from '../../images/oleo-pastel (8).png'
import Image9 from '../../images/oleo-pastel (9).png'
import Image10 from '../../images/oleo-pastel (10).png'
import { useEffect } from 'react';

const Oleopastel = () => {

    useEffect(() => {
        const handleScroll = () => {
            const items = document.querySelectorAll('.oleopastel__container');
    
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

        <div className='grid__layout__oleopastel'>
            <section className="oleopastel__container">
                <img className='oleopastel__img' src={Image1} alt="El vigilante" />
                <p className="oleopastel__p">Agua sobre agua I, de la Serie Paisajes Inmersos 2023, óleo pastel sobre cartulina, 24 x 34 cm</p>
            </section>
            <section className="oleopastel__container">
                <img className='oleopastel__img' src={Image2} alt="El vigilante" />
                <p className="oleopastel__p">Agua sobre agua II, de la Serie Paisajes Inmersos 2023, óleo pastel sobre cartulina, 24 x 34 cm</p>
            </section>
            <section className="oleopastel__container">
                <img className='oleopastel__img' src={Image3} alt="El vigilante" />
                <p className="oleopastel__p">Agua sobre agua III, de la Serie Paisajes Inmersos 2023, óleo pastel sobre cartulina, 24 x 34 cm</p>
            </section>
            <section className="oleopastel__container">
                <img className='oleopastel__img' src={Image4} alt="El vigilante" />
                <p className="oleopastel__p">Agua sobre agua IV, de la Serie Paisajes Inmersos 2023, óleo pastel sobre cartulina, 24 x 34 cm.jpg</p>
            </section>
            <section className="oleopastel__container">
                <img className='oleopastel__img' src={Image5} alt="El vigilante" />
                <p className="oleopastel__p">Agua sobre agua IX, de la Serie Paisajes Inmersos 2023, óleo pastel sobre cartulina, 24 x 34 cm.jpg.jpg.jpg.jpg.jpg.jpg</p>
            </section>
            <section className="oleopastel__container">
                <img className='oleopastel__img' src={Image6} alt="El vigilante" />
                <p className="oleopastel__p">Agua sobre agua V, de la Serie Paisajes Inmersos 2023, óleo pastel sobre cartulina, 24 x 34 cm.jpg.jpg</p>
            </section>
            <section className="oleopastel__container">
                <img className='oleopastel__img' src={Image7} alt="El vigilante" />
                <p className="oleopastel__p">Agua sobre agua VI, de la Serie Paisajes Inmersos 2023, óleo pastel sobre cartulina, 24 x 34 cm.jpg.jpg.jpg</p>
            </section>
            <section className="oleopastel__container">
                <img className='oleopastel__img' src={Image8} alt="El vigilante" />
                <p className="oleopastel__p">Agua sobre agua VII, de la Serie Paisajes Inmersos 2023, óleo pastel sobre cartulina, 24 x 34 cm.jpg.jpg.jpg.jpg</p>
            </section>
            <section className="oleopastel__container">
                <img className='oleopastel__img' src={Image9} alt="El vigilante" />
                <p className="oleopastel__p">Agua sobre agua VIII, de la Serie Paisajes Inmersos 2023, óleo pastel sobre cartulina, 24 x 34 cm.jpg.jpg.jpg.jpg.jpg</p>
            </section>
            <section className="oleopastel__container">
                <img className='oleopastel__img' src={Image10} alt="El vigilante" />
                <p className="oleopastel__p">Agua sobre agua X, de la Serie Paisajes Inmersos 2023, óleo pastel sobre cartulina, 24 x 34 cm.jpg.jpg.jpg.jpg.jpg.jpg.jpg</p>
            </section>

        </div>
    )
}

export default Oleopastel