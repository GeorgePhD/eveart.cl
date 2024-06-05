import './paintings.css';
import { paintings } from '../../galleriesInfo/paintings';
import { useEffect } from 'react';
import ContactBtn from '../ContactBtn/ContactBtn'

const Paintings = () => {

    useEffect(() => {
        const handleScroll = () => {
            const items = document.querySelectorAll('.paintings__container');
    
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
        <div className='grid__layout__paintings'>
                {
                    
                paintings.map((painting, index) => {

                    return (
                        <section className="paintings__container" key={index}>
                        <img className='paintings__img' src={painting.image} alt="dibujo manuscrito"/>
                        <p className="paintings__p">{painting.description}</p>
                    </section>
                    )
                })
            }
        </div>
        <ContactBtn />
        </>
    )
}

export default Paintings