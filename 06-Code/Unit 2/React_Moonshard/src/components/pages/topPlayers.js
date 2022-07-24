import './stylesComp.css'
import Carrsel from '../sections/carrusel';
import Information from '../sections/information';
import Discord from '../sections/discord.js';

const Top = () => (
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
export default Top