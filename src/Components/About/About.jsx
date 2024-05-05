import './about.css';
import img1 from '../../images/profile_img (1).jpg';
import img2 from '../../images/profile_img (2).jpg';
import img3 from '../../images/profile_img (3).jpg';
import img4 from '../../images/DSC04579.png';
import img5 from '../../images/DSC04580.png';
import { useState } from 'react';
const About = () => {

  const [language, setLanguage] = useState('spanish');

  const toggleLanguage = () => {
    setLanguage(language === 'spanish' ? 'english' : 'spanish');
  };
  
  return (
    <>
    <div className="about__p__container">
    {/* <h1 className='about__title'>{language === 'spanish' ? 'Hola,' : 'Hello,'}</h1>
    <h2 className='about__subtitle'>{language === 'spanish' ? 'soy Evelyn Aguilar Sánchez.' : 'I am Evelyn Aguilar Sánchez.'}</h2> */}
    <button className='about__button' onClick={toggleLanguage}>{language === 'spanish' ? 'Switch to English' : 'Cambiar a Español'}</button>
    <section className='about__section'>
      <p className="about__p inter__font">{language === 'spanish' ? 'Desde pequeña siempre me motivó el lenguaje del arte y sus matices para poder expresarme. Comencé a recibir talleres de artes visuales, descubrí sus técnicas y como éstas pueden ser un medio para representar un pensamiento individual. ' : 'Since I was little little I have always been motivated by the language of art and its nuances to be able to express myself. I began to receive visual art workshops, discovered their techniques and how they can be a medium to represent an individual thought.'}</p>
      <img className='about__img' src={img1} alt="" />
    </section>
    <section className='about__section'>
      <img className='about__img' src={img2} alt="" />
    <p className="about__p inter__font">
    El Arte Contemporáneo brinda un sin número de referentes con los cuales mi obra en un plano general se identifica. Mi trabajo se ve marcado por diferentes series y medios el arte objetual siempre ha estado presente de alguna forma. Al elegir un soporte para una idea el objeto en sí se convierte en protagonista de una historia que se muestra. Gran parte de mi obra tiene como eje principal la memoria, por lo que el arte objetual ocupa un papel principal tanto en el proceso, como en su finalidad.
      </p>
    </section>
    <section className='about__section'>
      <p className="about__p inter__font">
      En relación con la pintura, el tema y la variedad de los colores que utilizo están marcados
      por lo emocional.
      </p>
      <img className='about__img' src={img3} alt="" />
    </section>
    
    <section className='about__section'>
      <img className='about__img' src={img4} alt="" />      
      <p className="about__p inter__font">
        Mi obra está en contante cambio, creo que el desafío más grande que no quedarse en la
        zona de confort.
      </p>
    </section>
      
    <section className='about__section'>
    <p className="about__p inter__font">
      Nadar en seco realizada en el año 2014, es una obra a le que le tengo mucho cariño.
      Representa un cierre de un proceso de casi tres años para mi tesis de licenciatura en la
      Universidad de las Artes (ISA).
    </p>
    <img className='about__img' src={img5} alt="" /> 
    </section>
    <section className='about__section'>
      <p className="about__p inter__font about__p__align__start">To be continued...</p>
    </section>
      
    </div>
    
    </>
  )
}

export default About