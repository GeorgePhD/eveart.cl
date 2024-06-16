import './oleopastel.css';
import { useEffect, useState } from 'react';
import ContactBtn from '../ContactBtn/ContactBtn'
import { oleopastel } from '../../galleriesInfo/oleopastel';


const Oleopastel = () => {

    const [fullScreenImage, setFullScreenImage] = useState(null);
    const handleClick = (collage) => {
        if (fullScreenImage === collage) {
            setFullScreenImage(null);
        } else {
            setFullScreenImage(collage);
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            const items = document.querySelectorAll('.oleopastel__container');
    
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
        <div className='grid__layout__oleopastel'>
                {
                    
                oleopastel.map((oleopastel, index) => {

                    return (
                        <section className="oleopastel__container" key={index}>
                        <img className={fullScreenImage === oleopastel ? 'fullScreenImage' : 'oleopastel__img'}
                                    src={oleopastel.image}
                                    alt={`Oleopastel ${index + 1}`}
                                    onClick={() => handleClick(oleopastel)}
                            />
                        <p className="oleopastel__p">{oleopastel.description}</p>
                    </section>
                    )
                })
            }
        </div>
        <ContactBtn />
        </>
    )
}

export default Oleopastel