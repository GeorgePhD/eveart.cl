import './installations.css';
import Image1 from '../../images/Screenshot_20221228-162623_Instagram.png'

import { useEffect } from 'react';

const Installations = () => {

    useEffect(() => {
        const handleScroll = () => {
            const items = document.querySelectorAll('.installations__container');
    
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

        <div className='grid__layout__installations'>
            <section className="installations__container">
                <img className='installations__img' src={Image1} alt="El vigilante" />
                <p className="installations__p">Screenshot_20221228-162623_Instagram</p>
            </section>
            <section className="installations__container">
                <img className='installations__img' src={Image1} alt="El vigilante" />
                <p className="installations__p">Screenshot_20221228-162623_Instagram</p>            </section>
            <section className="installations__container">
                <img className='installations__img' src={Image1} alt="El vigilante" />
                <p className="installations__p">Screenshot_20221228-162623_Instagram</p>            </section>
            <section className="installations__container">
                <img className='installations__img' src={Image1} alt="El vigilante" />
                <p className="installations__p">Screenshot_20221228-162623_Instagram</p>            </section>
            <section className="installations__container">
                <img className='installations__img' src={Image1} alt="El vigilante" />
                <p className="installations__p">Screenshot_20221228-162623_Instagram</p>            </section>
            <section className="installations__container">
                <img className='installations__img' src={Image1} alt="El vigilante" />
                <p className="installations__p">Screenshot_20221228-162623_Instagram</p>            </section>
            <section className="installations__container">
                <img className='installations__img' src={Image1} alt="El vigilante" />
                <p className="installations__p">Screenshot_20221228-162623_Instagram</p>            </section>
            <section className="installations__container">
                <img className='installations__img' src={Image1} alt="El vigilante" />
                <p className="installations__p">Screenshot_20221228-162623_Instagram</p>            </section>
            <section className="installations__container">
                <img className='installations__img' src={Image1} alt="El vigilante" />
                <p className="installations__p">Screenshot_20221228-162623_Instagram</p>            </section>
            <section className="installations__container">
                <img className='installations__img' src={Image1} alt="El vigilante" />
                <p className="installations__p">Screenshot_20221228-162623_Instagram</p>            </section>

        </div>
    )
}

export default Installations