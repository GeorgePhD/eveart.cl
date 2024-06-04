import './drawings.css';
import { drawings } from '../../galleriesInfo/drawings';
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
                {
                    
                drawings.map((drawing, index) => {

                    return (
                        <section className="drawing__container" key={index}>
                        <img className='drawing__img' src={drawing.image} alt="dibujo manuscrito"/>
                        <p className="drawing__p">{drawing.description}</p>
                    </section>
                    )
                })
            }
            </div>
            <ContactBtn />
        </>
    )
}

export default Drawings