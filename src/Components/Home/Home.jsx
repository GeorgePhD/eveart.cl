import './home.css';
import banner from '../../images/banner.png';
const Home = () => {

  return (
    <div className='home__container'>
      <div className='content'>
        <h1 className='title'>
{/*           <span className='beating-heart'>🖤</span>
 */}          Evelyn Aguilar Sánchez
{/*           <span className='beating-heart'>🖤</span>
 */}        </h1>
            <div className="home__banner">
              <img className='home__banner__img' src={banner} alt="banner" />
            </div>
      </div>
    </div>
  );
};

export default Home
