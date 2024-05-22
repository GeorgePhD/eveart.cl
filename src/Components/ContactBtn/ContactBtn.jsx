import './contactbtn.css';
import {Link} from 'react-router-dom';


const ContactBtn = () => {

    return (
        <div>
            <div className="contactBtn__subtitle__container">
                <h2 className="contactBtn__subtitle">¿Interesado en mis obras? </h2>
            </div>
            <div className="contactBtn__section">
                <p className="contactBtn__content">Puedes contactarme acá:</p>
                <Link to='./contact' className='contact__btn'>enviar mensaje</Link>
            </div>
        </div>
        

    )
}

export default ContactBtn