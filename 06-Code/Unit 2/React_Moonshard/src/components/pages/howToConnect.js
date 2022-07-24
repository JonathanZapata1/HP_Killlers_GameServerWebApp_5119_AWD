
import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesComp.css'
import Information from '../sections/information.js'
import Discord from '../sections/discord.js'
import Carrsel from '../sections/carrusel.js'
const How= () => (
  <div>
     <Carrsel/>
      <Information/> 
      <Discord/>   
  </div>
);
export default How