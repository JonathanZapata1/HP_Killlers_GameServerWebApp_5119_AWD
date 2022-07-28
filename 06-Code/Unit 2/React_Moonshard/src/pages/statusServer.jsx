import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/pages/statusServer.css';
import '../assets/css/pages/main.css';
import Carrsel from '../components/carrusel';
import Information from '../components/information';
import Discord from '../components/discord.jsx';
import img from '../assets/img/statusserver.png'

const ServerStatus = () => (
<div className="main-body">
  <Carrsel/>
  <Information/> 
  <div className='down-style item3'>
      <div className='down-text'>
        <br/>
        <br/>
        <br/>
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