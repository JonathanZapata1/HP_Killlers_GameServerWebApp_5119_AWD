import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesComp.css';
import Carrsel from '../sections/carrusel.js';
import Information from '../sections/information.js'
import Discord from '../sections/discord';

const Register = () => (
  <div>
     <Carrsel/>
     <Information/> 
     <Discord/>
     <div className='rules-style'>
      <div className='rules-text'>
        <h4>Rules private server, </h4> 
          <ul>
            <li>
            No hackers
            </li>
            <li>
              Play and fun
            </li>
          </ul>
      </div>
    </div>
  </div>
);
export default Register