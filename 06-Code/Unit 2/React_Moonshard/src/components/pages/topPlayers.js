import './stylesComp.css'
import Carrsel from '../sections/carrusel';
import Information from '../sections/information';
import Discord from '../sections/discord.js';
import TopPlayerTable from '../sections/topPlayerTable';

const Top = () => (
  <div className="main-body">
  <Carrsel/>
  <Information/> 
  <div className='down-style item3'>
      <div className='down-text'>
      <TopPlayerTable/>
      </div>
    </div>
  <Discord/>
  </div> 
);
export default Top