import './paintings.css';
import { paintings } from '../../galleriesInfo/paintings';
import { useEffect, useState } from 'react';
import ContactBtn from '../ContactBtn/ContactBtn'

const Paintings = () => {

    const [fullScreenImage, setFullScreenImage] = useState(null);
    const handleClick = (painting) => {
        if (fullScreenImage === painting) {
            setFullScreenImage(null);
        } else {
            setFullScreenImage(painting);
        }
    }

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
                            <img className={fullScreenImage === painting ? 'fullScreenImage' : 'paintings__img'}
                                    src={painting.image}
                                    alt={`Paintings ${index + 1}`}
                                    onClick={() => handleClick(painting)}
                            />
                            <p className="paintings__p courier-prime-regular">{painting.description}</p>
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