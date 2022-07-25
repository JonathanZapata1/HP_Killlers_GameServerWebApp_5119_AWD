
import './stylesComp.css';
import Carrsel from '../sections/carrusel';
import Information from '../sections/information';
import Discord from '../sections/discord.js';
import RegisterForm from '../sections/registerForm.js';


const Register = () => (
  <div className="main-body">
  <Carrsel/>
  <Information/> 
     <div className='down-style item3'>
      <div className='down-text'>
      <RegisterForm/>
      </div>
    </div>
  <Discord/>
  </div> 
  
);
export default Register