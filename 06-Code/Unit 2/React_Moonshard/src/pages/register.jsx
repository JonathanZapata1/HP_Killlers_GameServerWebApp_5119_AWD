import '../assets/css/pages/register.css';
import '../assets/css/pages/main.css';
import Carrsel from '../components/carrusel';
import Information from '../components/information';
import Discord from '../components/discord';
import { addUser,getUserById } from '../services/api';
import { useState } from 'react';

const Register = () => {
  const [user, setUser] = useState({
    id: 0,
    email:"",
    userName: "",
    gameName: "",
    isActive:true,
    accountMoney: 0,
    timePlayed: 0,
    lastTimeVisited: "",
    spendedMoney: 0,

  });


  function onValueChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  async function addUserInformation(e) {
    e.preventDefault();
    await addUser(user);
  }

  return (
    <div className="main-body ">
      <Carrsel />
      <Information />
      <div className='down-style item3 grid-item'>
        <div className='down-text'>
          <form>
             <label> Enter your ID</label>
              <input type="email" className="form-control" onChange={(e)=> onValueChange(e)} name= "id"/>
              <label> Enter your Email</label>
              <input type="email" className="form-control" onChange={(e)=> onValueChange(e)} name= "email"/>
              <label> Enter the way to be know here</label>
              <input type="text" className="form-control" onChange={(e)=> onValueChange(e)} name= "userName" />   
              <label> Enter your WOW name Game</label>  
              <input type="text" className="form-control" onChange={(e)=> onValueChange(e)} name= "gameName" />   
              <label> Enter your actual Item</label>      
              <input type="text" className="form-control" onChange={(e)=> onValueChange(e)} name= "favoriteItem"/>
              <label>Enter the money you want to introduce in this account</label>
              <input type="number" className="form-control" onChange={(e)=> onValueChange(e)} name= "accountMoney" />
              <label> Enter the points of your account in game</label> 
              <input type="number" className="form-control" onChange={(e)=> onValueChange(e)} name= "pointsObtained" /> 
            <button onClick={addUserInformation}>Submit</button>
          </form>
        </div>
      </div>
      <Discord />
    </div>

  )
};
export default Register