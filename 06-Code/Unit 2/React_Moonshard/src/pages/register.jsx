import '../assets/css/pages/register.css';
import '../assets/css/pages/main.css';
import Carrsel from '../components/carrusel';
import Information from '../components/information';
import Discord from '../components/discord';
import RegisterForm from '../components/registerForm';


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