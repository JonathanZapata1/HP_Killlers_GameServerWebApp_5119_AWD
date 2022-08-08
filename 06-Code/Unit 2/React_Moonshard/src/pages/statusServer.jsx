import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/pages/statusServer.css';
import '../assets/css/pages/main.css';
import Carrsel from '../components/carrusel';
import Information from '../components/information';
import Discord from '../components/discord.jsx';
import img from '../assets/img/statusserver.png';
import dashboardImg from '../assets/img/3-6.jpg';

const ServerStatus = () => (
<div className="status-body">
  <div className="item2 grid-item">
    <div className= "statusPresentation">
      
    </div>
  </div>
  <div className='down-style item3 grid-item'>
      <div className='down-text'>
      <img
          className="d-block w-100 img"
          src={img}
          alt="First slide"
        />
      </div>
    </div>
  <Discord/>
  </div> 
);
export default ServerStatus