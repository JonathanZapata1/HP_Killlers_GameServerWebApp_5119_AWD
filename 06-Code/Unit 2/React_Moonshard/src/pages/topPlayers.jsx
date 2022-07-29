import { useEffect } from 'react';
import { useState } from 'react';
import '../assets/css/pages/topPlayers.css';
import '../assets/css/pages/main.css';
import Carrsel from '../components/carrusel';
import Information from '../components/information';
import Discord from '../components/discord';


import { getRanking } from '../services/api.js'
const Top = () => {

  const [users, setUsers]= useState([]);

  useEffect(()=>{
      getAllUsers();
  },[]);

  const getAllUsers = async ()=>{
     let response= await getRanking();
     setUsers(response.data);
  };
return(
  <div className="main-body">
  <Carrsel/>
  <Information/> 
  <div className='down-style item3 grid-item'>
      <div className='down-text'>
            <table class="table table-bordered" style={{width:600}}>
                <thead class="thead-light">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">USER NAME</th>
                        <th scope="col" >RANKING POINTS</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user =>(
                          <tr key ={user.id}>  
                            <td> {user.id} </td>
                            <td>{user.userName}</td>
                            <td>{user.rankPoints}</td>
                            </tr>
                        ))
                    }
                   
                </tbody>
            </table>
      </div>
    </div>
  <Discord/>
  </div> 
)};
export default Top