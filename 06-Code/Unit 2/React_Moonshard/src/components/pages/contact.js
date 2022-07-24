
import './stylesComp.css'
import '../sections/header.css'
import Carrsel from '../sections/carrusel';
import Information from '../sections/information';
import Discord from '../sections/discord.js';
const Contact = () => (
  <div className="main-body">
  <Carrsel/>
  <Information/> 
  <Discord/>
</div>
);
export default Contact