import { useState } from "react";

const ChangeLanguageButton = () => {

    const [language, setLanguage] = useState('spanish');

    const toggleLanguage = () => {
    setLanguage(language === 'spanish' ? 'english' : 'spanish');
    };
    return (
        <button className='about__button' onClick={toggleLanguage}>{language === 'spanish' ? 'Switch to English' : 'Cambiar a Español'}</button>
    )
}

export default ChangeLanguageButton