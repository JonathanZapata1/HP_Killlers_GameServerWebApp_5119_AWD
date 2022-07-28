
import '../assets/css/pages/home.css';
import '../assets/css/pages/main.css';

import Carrsel from '../components/carrusel';
import Information from '../components/information';
import Discord from '../components/discord';


const Home = () => (

  <div className="main-body">
  <Carrsel/>
  <Information/> 
    <div className='down-style item3'>
      <div className='down-text'>
      <h4>Welcome to our private server, </h4> 
    ____________________________________________________________ 
      <p>Moonshard is a private community of World of Warcraft to 
      cataclysm expansion 4.3.4, style of Game Blizz.</p>
     </div>
    </div> 
  <Discord/>
  </div> 

);
export default Home