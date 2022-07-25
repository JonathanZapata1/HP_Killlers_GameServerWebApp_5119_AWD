import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesComp.css'
import Carrsel from '../sections/carrusel';
import Information from '../sections/information';
import Discord from '../sections/discord.js';
const ServerStatus = () => (
<div className="main-body">
  <Carrsel/>
  <Information/> 
  <div className='down-style item3'>
      <div className='down-text'>
      
      </div>
    </div>
  <Discord/>
  </div> 
);
export default ServerStatus