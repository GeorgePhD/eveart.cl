import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faInstagram, faWhatsapp, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import artsyLogo from '../../images/artsy-logo.png';
library.add(faFacebook, faInstagram, faWhatsapp, faYoutube, faTiktok);
const artsy = "https://www.artsy.net/artist/evelyn-aguilar-sanchez";
const instagram = "https://www.instagram.com/evelynaguilar.art?igsh=YzUzczhxeWJpY292&utm_source=qr";
//const youtube = "https://www.youtube.com/@losmaitenes";
/* const tiktok = "https://www.tiktok.com/";
 */const whatsapp = "https://api.whatsapp.com/send?phone=56961107025";

const FooterIcons = () => {
    return (
        <div className='footer__icons__container'>
            {/* Brand icons */} {/* <FontAwesomeIcon className='footer__icons' icon={['fab', 'facebook']} /> */}
            <Link to={artsy} target='_blank'><img src={artsyLogo} className='footer__icons artsy-logo' alt="artsy logo" /></Link>
            <Link to={instagram} target='_blank'><FontAwesomeIcon className='footer__icons' icon={['fab', 'instagram']} /></Link>
            <Link to={whatsapp} target='_blank'><FontAwesomeIcon className='footer__icons' icon={['fab', 'whatsapp']} /></Link>
            {/* <Link to={tiktok} target='_blank'><FontAwesomeIcon className='footer__icons' icon={['fab', 'tiktok']} /></Link> */}
            {/* <Link to={youtube} target='_blank'><FontAwesomeIcon className='footer__icons' icon={['fab', 'youtube']} /></Link> */}
        </div>
    );
};

export default FooterIcons;
