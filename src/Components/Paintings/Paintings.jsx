import './paintings.css';
import Image1 from '../../images/painting (1).png'
import Image2 from '../../images/painting (2).png'
import Image3 from '../../images/painting (3).png'
import Image4 from '../../images/painting (4).png'
import Image5 from '../../images/painting (5).png'
import Image6 from '../../images/painting (6).png'
import Image7 from '../../images/painting (7).png'
import Image8 from '../../images/painting (8).png'
import Image9 from '../../images/painting (9).png'
import Image10 from '../../images/painting (10).png'
import Image11 from '../../images/painting (11).png'
import Image12 from '../../images/painting (12).png'
import Image13 from '../../images/painting (13).png'
import Image14 from '../../images/painting (14).png'
import Image15 from '../../images/painting (15).png'
import Image16 from '../../images/painting (16).png'
import Image17 from '../../images/painting (17).png'
import Image18 from '../../images/painting (18).png'
import Image19 from '../../images/painting (19).png'
import Image20 from '../../images/painting (20).png'
import Image21 from '../../images/painting (21).png'
import Image22 from '../../images/painting (22).png'
import Image23 from '../../images/painting (23).png'
import Image24 from '../../images/painting (24).png'
import Image25 from '../../images/painting (25).png'
import Image26 from '../../images/painting (26).png'
import Image27 from '../../images/painting (27).png'
import Image28 from '../../images/painting (28).png'
import Image29 from '../../images/painting (29).png'
import Image30 from '../../images/painting (30).png'
import Image31 from '../../images/painting (31).png'
import Image32 from '../../images/painting (32).png'
import Image33 from '../../images/painting (33).png'
import Image34 from '../../images/painting (34).png'
import Image35 from '../../images/painting (35).png'
import Image36 from '../../images/painting (36).png'
import Image37 from '../../images/painting (37).png'
import Image38 from '../../images/painting (38).png'
import Image39 from '../../images/painting (39).png'
import Image40 from '../../images/painting (40).png'
import Image41 from '../../images/painting (41).png'
import Image42 from '../../images/painting (42).png'
import Image43 from '../../images/painting (43).png'
import Image44 from '../../images/painting (44).png'
import Image45 from '../../images/painting (45).png'
import Image46 from '../../images/painting (46).png'
import Image47 from '../../images/painting (47).png'
import Image48 from '../../images/painting (48).png'
import Image49 from '../../images/painting (49).png'
import Image50 from '../../images/painting (50).png'
import Image51 from '../../images/painting (51).png'
import Image52 from '../../images/painting (52).png'
import Image53 from '../../images/painting (53).png'
import Image54 from '../../images/painting (54).png'
import Image55 from '../../images/painting (55).png'
import Image56 from '../../images/painting (56).png'
import Image57 from '../../images/painting (57).png'
import Image58 from '../../images/painting (58).jpg'
import { useEffect } from 'react';

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

        <div className='grid__layout__paintings'>
            <section className="paintings__container">
                <img className='paintings__img' src={Image1} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image2} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image3} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image4} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image5} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image6} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image7} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image8} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image9} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image10} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image11} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image12} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image13} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image14} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image15} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image16} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image17} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image18} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image19} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image20} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image21} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image22} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image23} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image24} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image25} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image26} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image27} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image28} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image29} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image30} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image31} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image32} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image33} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image34} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image35} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image36} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image37} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image38} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image39} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image40} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image41} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image42} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image43} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image44} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image45} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image46} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image47} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image50} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image48} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image49} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image52} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image56} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image54} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image58} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image55} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image57} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image51} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
            <section className="paintings__container">
                <img className='paintings__img' src={Image53} alt="El vigilante" />
                <p className="paintings__p">Description</p>
            </section>
        </div>
    )
}

export default Paintings