import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesComp.css';
import Carrsel from '../sections/carrusel.js';

const Register = () => (
  <div>
     <Carrsel/>
      <div className='download-style'>
        <div className='information-style'>
        <p>Server Information</p>_______________________________________
        <p>Reamlist: logon.mooonshard.wow.com</p>
        <p>Game version: 4.3.4</p>
        <p>Game path: Download</p>
      </div>
      </div>
  </div>
);
export default Register