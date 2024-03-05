import './drawings.css';
import Image1 from '../../images/EL VIGILANTE - 2018 - Tinta sobre papel - 90 x 75 cm..png'
import Image2 from '../../images/Fe, 2016. Lápiz de color sobre cartulina, 50 x 70 cm..png'
import Image3 from '../../images/Librero, 2016. Tinta sobre cartulina, 21 x 30 cm..png'
import Image4 from '../../images/METRO DE VILLA ALEMANA - 2018 - Tinta sobre papel - 100 x 80 cm..png'
import Image5 from '../../images/Paisaje sin nombre, 2017, Chile. Tinta sobre papel, 64 x 56 cm..png'
import Image6 from '../../images/RINCÓN - 2017 - Tinta sobre papel - 86,5 x 66 cm..png'
import Image7 from '../../images/ST, 2016, Cuba. Tinta sobre papel, 86,5 x 66 cm. (3).png'
import Image8 from '../../images/ST, 2016. Tinta sobre lienzo, 38 x 38 cm..png'
import Image9 from '../../images/ST, 2017, Chile. Tinta sobre papel, 86,5 x 66 cm..png'
import Image10 from '../../images/ST, 2016, Cuba. Tinta sobre papel, 86,5 x 66 cm..png'


const Drawings = () => {

    return (

        <div className='grid__layout'>
            <section className="drawing__container">
                <img className='drawing__img' src={Image1} alt="El vigilante" />
                <p className="drawing__p">EL VIGILANTE - 2018 - Tinta sobre papel - 90 x 75 cm</p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image2} alt="El vigilante" />
                <p className="drawing__p">Fe, 2016. Lápiz de color sobre cartulina, 50 x 70 cm</p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image3} alt="El vigilante" />
                <p className="drawing__p">Librero, 2016. Tinta sobre cartulina, 21 x 30 cm</p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image4} alt="El vigilante" />
                <p className="drawing__p">Librero, 2016. Tinta sobre cartulina, 21 x 30 cm</p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image5} alt="El vigilante" />
                <p className="drawing__p">Librero, 2016. Tinta sobre cartulina, 21 x 30 cm</p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image6} alt="El vigilante" />
                <p className="drawing__p">Librero, 2016. Tinta sobre cartulina, 21 x 30 cm</p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image7} alt="El vigilante" />
                <p className="drawing__p">Librero, 2016. Tinta sobre cartulina, 21 x 30 cm</p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image8} alt="El vigilante" />
                <p className="drawing__p">Librero, 2016. Tinta sobre cartulina, 21 x 30 cm</p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image9} alt="El vigilante" />
                <p className="drawing__p">Librero, 2016. Tinta sobre cartulina, 21 x 30 cm</p>
            </section>
            <section className="drawing__container">
                <img className='drawing__img' src={Image10} alt="El vigilante" />
                <p className="drawing__p">Librero, 2016. Tinta sobre cartulina, 21 x 30 cm</p>
            </section>

        </div>
    )
}

export default Drawings