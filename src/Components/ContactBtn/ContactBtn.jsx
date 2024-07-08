import './contactbtn.css';


const ContactBtn = () => {

    return (
        <div>
            <div className="contactBtn__subtitle__container">
                <h2 className="contactBtn__subtitle">¿Interesado en mis obras? </h2>
            </div>
            <div className="contactBtn__section">
                <p className="contactBtn__content">Puedes contactarme acá:</p>
                <a href="mailto:eveart@evelynaguilarart.com" className='contact__btn'>enviar mensaje</a>

            </div>
        </div>
        

    )
}

export default ContactBtn