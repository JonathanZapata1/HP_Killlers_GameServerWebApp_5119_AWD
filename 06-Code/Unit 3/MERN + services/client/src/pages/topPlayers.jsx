import { useEffect } from 'react';
import { useState } from 'react';
import '../assets/css/pages/topPlayers.css';
import '../assets/css/pages/main.css';
import Discord from '../components/discord';
import Table from 'react-bootstrap/Table';

import { getRanking } from '../services/api.js'
const Top = () => {
  var [pos] = useState(1);
  const [users, setUsers]= useState([]);

  useEffect(()=>{
      getAllUsers();
  },[]);

  const getAllUsers = async ()=>{
     let response= await getRanking();
     await setUsers(response.data);
  };

return(
  <div className="main-body">

  <div className='down-style item3 grid-item'>
      <div className='down-text'>
      <h2> POSITION OF PLAYERS CALCULATED BY RANKING</h2> 
            <Table striped bordered hover variant="dark" style={{width:700}}>
                <thead >
                    <tr className='table-head'>
                      <th scope="col"> Position</th>
                        <th scope="col">ID</th>
                        <th scope="col">User Name</th>
                        <th scope="col" >Ranking Points</th>
                    </tr>
                </thead>
                <tbody>
                  {
                        users.map(user=>{
                          user.pos = pos;
                          pos++;
                          return(
                            <tr key ={user.id}> 
                              <td>{user.pos}</td> 
                              <td> {user.id} </td>
                              <td>{user.userName}</td>
                              <td>{user.rankPoints}</td>
                              </tr>
                          )
                        }
                          )
                    }
                   
                </tbody>
            </Table>
      </div>
    </div>
  <Discord/>
  </div> 
)};
export default Top