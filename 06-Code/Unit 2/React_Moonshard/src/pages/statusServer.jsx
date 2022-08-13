import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/pages/statusServer.css';
import '../assets/css/pages/main.css';
import img from '../assets/img/statusserver.png';

const ServerStatus = () => (
  <div className="status-body">
    <div className="item2 grid-item down-style-modified">
      <div className="statusPresentation">
        <h2>
          SERVER STATUS
        </h2>
        <p>
          Here you can check the status of the server and how many players are connected to it
        </p>
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
  </div>
);
export default ServerStatus