import './collage.css';
import { collage } from '../../galleriesInfo/collage';
import { useEffect } from 'react';
import ContactBtn from '../ContactBtn/ContactBtn'


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

        <>
        <div className='grid__layout__collage'>
                {
                    
                collage.map((collage, index) => {

                    return (
                        <section className="collage__container" key={index}>
                        <img className='collage__img' src={collage.image} alt="collage"/>
                        <p className="collage__p">{collage.description}</p>
                    </section>
                    )
                })
            }
        </div>
        <ContactBtn />
        </>
    )
}

export default Collage