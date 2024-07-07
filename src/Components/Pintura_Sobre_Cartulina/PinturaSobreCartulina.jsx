import "./pinturasobrecartulina.css";
import { useEffect, useState } from 'react';
import ContactBtn from '../ContactBtn/ContactBtn';
import { pintura_sobre_cartulina } from '../../galleriesInfo/pintura_sobre_cartulina';


const PinturaSobreCartulina = () => {
    const [fullScreenImage, setFullScreenImage] = useState(null);

    const handleClick = (pintura_sobre_cartulina) => {
        if (fullScreenImage === pintura_sobre_cartulina) {
            setFullScreenImage(null);
        } else {
            setFullScreenImage(pintura_sobre_cartulina);
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            const items = document.querySelectorAll('.pintura_sobre_cartulina__container');

            items.forEach((item) => {
                const itemTop = item.getBoundingClientRect().top;

                // Adjust this value based on when you want the animation to start
                if (itemTop < window.innerHeight * 0.3) {
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
            <div className='grid__layout__pintura_sobre_cartulina'>
                {
                    pintura_sobre_cartulina.map((item, index) => (
                        <section className="pintura_sobre_cartulina__container" key={index}>
                            <img className={fullScreenImage === item ? 'fullScreenImage' : 'pintura_sobre_cartulina__img'}
                                src={item.image}
                                alt={`pintura_sobre_cartulina ${index + 1}`}
                                onClick={() => handleClick(item)}
                            />
                            {/* <p className="pintura_sobre_cartulina__p">{item.description}</p> */}
                        </section>
                    ))
                }
            </div>
            <ContactBtn />
        </>
    );
}

export default PinturaSobreCartulina;
