import '../assets/css/pages/register.css';
import '../assets/css/pages/main.css';
import Carrsel from '../components/carrusel';
import Information from '../components/information';
import Discord from '../components/discord';
import { addUser } from '../services/api';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Register = () => {
  const [user, setUser] = useState({
    id: 0,
    email: "",
    userName: "",
    gameName: "",
    mainClass: "",
    isActive: true,
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
    var today = new Date();
    setUser(today = user.lastTimeVisited);
    await addUser(user);
  }

  async function generateSelectClass(e) {

  }

  return (
    <div className="main-body ">
      <Carrsel />
      <Information />
      <div className='down-style item3 grid-item'>
        <div className='down-text'>
          <Form className="main-form">
            <label> Enter your ID</label>
            <input type="number" className="input-form form-number" onChange={(e) => onValueChange(e)} name="id" />
            <label> Enter your Email</label>
            <input type="email" className="input-form form-text" onChange={(e) => onValueChange(e)} name="email" />
            <label> Enter the way to be know here</label>
            <input type="text" className="input-form form-text" onChange={(e) => onValueChange(e)} name="userName" />
            <label> Enter your Main Class</label>
            <select className="input-form form-text" onChange={(e) => onValueChange(e)} name="mainClass" >
            <option value="1" disabled style={{background: "black", color: "aliceblue"}}>Categories</option>
                    <option value="2" style={{background: "black", color: "aliceblue"}}>Warrior</option>
                    <option value="3" style={{background: "black", color: "aliceblue"}}>Rogue</option>
                    <option value="4" style={{background: "black", color: "aliceblue"}}>Mage</option>
              </select>
            <label> Enter your actual Item</label>
            <input type="text" className="input-form form-text" onChange={(e) => onValueChange(e)} name="favoriteItem" />
            <label>Enter the money you want to introduce in this account</label>
            <input  type="number" className="input-form form-number" onChange={(e) => onValueChange(e)} name="accountMoney" />
            <label> Enter the points of your account in game</label>
            <input  type="number" className="input-form form-number" onChange={(e) => onValueChange(e)} name="pointsObtained" />

            <Button  style={{position:"relative", top:"10px"}}variant="secondary" onClick={addUserInformation}>Submit</Button>
          </Form>
        </div>
      </div>
      <Discord />
    </div>

  )
};
export default Register