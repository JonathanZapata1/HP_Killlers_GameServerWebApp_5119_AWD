import '../assets/css/pages/topPlayers.css';
import '../assets/css/pages/main.css';
import Carrsel from '../components/carrusel';
import Information from '../components/information';
import Discord from '../components/discord';
import TopPlayerTable from '../components/topPlayerTable';

const Top = () => (
  <div className="main-body">
  <Carrsel/>
  <Information/> 
  <div className='down-style item3 grid-item'>
      <div className='down-text'>
      <TopPlayerTable/>
      </div>
    </div>
  <Discord/>
  </div> 
);
export default Top