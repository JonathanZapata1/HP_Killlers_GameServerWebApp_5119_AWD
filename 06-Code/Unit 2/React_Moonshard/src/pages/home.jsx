
<<<<<<< HEAD:06-Code/Unit 2/React_Moonshard/src/pages/home.jsx
import '../assets/css/pages/home.css';
import '../assets/css/pages/main.css';

import Carrsel from '../components/carrusel';
import Information from '../components/information';
import Discord from '../components/discord';
=======
import './stylesComp.css'
import '../sections/header-responsive.css'
import Carrsel from '../sections/carrusel';
import Information from '../sections/information';
import Discord from '../sections/discord.js';
>>>>>>> d4fb267b4063c7177b1373f0c4930d0e4dde2bf1:06-Code/Unit 2/React_Moonshard/src/components/pages/home.js


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