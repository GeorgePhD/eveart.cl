import './about.css';
import img1 from '../../images/profile_img (1).jpg';
import img2 from '../../images/profile_img (2).jpg';
import img3 from '../../images/profile_img (3).jpg';
import img4 from '../../images/profile_img (4).jpg';
import img5 from '../../images/profile_img (5).jpg';
import { useState } from 'react';
import ContactBtn from '../ContactBtn/ContactBtn';
const About = () => {

  const [language, setLanguage] = useState('spanish');

  const toggleLanguage = () => {
    setLanguage(language === 'spanish' ? 'english' : 'spanish');
  };
  
  return (
    <>
    <div className="about__p__container">
    <button className='about__button courier-prime-bold' onClick={toggleLanguage}>{language === 'spanish' ? 'Switch to English' : 'Cambiar a Español'}</button>
    <section className='about__section'>
    <img className='about__img about__img__1' src={img5} alt="" /> 
    <p className="about__p  courier-prime-regular">{language === 'spanish' ? 'Acerca de mi...' : 'About...'}</p>
    </section>
    <section className='about__section'>
      <p className="about__p  courier-prime-regular">{language === 'spanish' ? 'Desde pequeña siempre me motivó el lenguaje del arte y sus matices para poder expresarme. Comencé a recibir talleres de artes visuales, descubrí sus técnicas y como éstas pueden ser un medio para representar un pensamiento individual.' : 'Since I was little I have always been motivated by the language of art and its nuances to be able to express myself. I began to receive visual arts workshops, I discovered their techniques and how they can be a means to represent an individual thought.'}</p>
      <img className='about__img' src={img1} alt="" />
    </section>
    <section className='about__section'>
      <img className='about__img' src={img2} alt="" />
    <p className="about__p  courier-prime-regular">{language === 'spanish' ? 'El Arte Contemporáneo brinda un sin número de referentes con los cuales mi obra - en un plano general - se identifica. Mi trabajo se ve marcado por diferentes series y medios, el arte objetual, el dibujo, la pintura, el collage entre otros, siempre han estado presentes de alguna forma. Al elegir un soporte para una idea el objeto en sí se convierte en protagonista de una historia que se muestra. Gran parte de mi obra tiene como eje principal la memoria, por lo que ocupa un papel principal tanto en el proceso, como en su finalidad.' : 'Contemporary Art provides a number of references with which my work - on a general level - identifies. My work is marked by different series and media, object art, drawing, painting, collage among others, have always been present in some form. When choosing a support for an idea, the object itself becomes the protagonist of a story that is shown. Much of my work has memory as its main axis, which is why it plays a main role both in the process and in its purpose.'}</p>
    </section>
    <section className='about__section'>
      <p className="about__p  courier-prime-regular">{language === 'spanish' ? 'En relación con la pintura, el tema y la variedad de los colores que utilizo están marcados por lo emocional.' : 'In relation to painting, the theme and the variety of colors I use are marked by the emotional.'}</p>
      <img className='about__img' src={img3} alt="" />
    </section>
    
    <section className='about__section'>
      <img className='about__img' src={img4} alt="" />      
      <p className="about__p  courier-prime-regular">{language === 'spanish' ? 'Mi obra está en constante cambio, creo que el desafío más grande es no quedarse en la zona de confort.' : 'My work is constantly changing, I think the biggest challenge is not to stay in the comfort zone.'}
      </p>
    </section>
    {/* <section className='about__section'>
      <p className="about__p  about__p__align__start">{language === 'spanish' ? 'Continuará...' : 'To be continued...'}</p>
    </section> */}
        <ContactBtn />
    </div>
    
    </>
  )
}

export default About