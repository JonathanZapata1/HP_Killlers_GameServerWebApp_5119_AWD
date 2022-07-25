
import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesComp.css'

import Carrsel from '../sections/carrusel';
import Information from '../sections/information';
import Discord from '../sections/discord.js';

 const Menu= () => (
<div className="main-body">
  <Carrsel/>
  <Information/> 
    <div className='down-style item3'>
      <div className='down-text'>
     <p> Download the game "World of Warcraft" in its "Cataclysm" expansion. In this case you already have the game downloaded, you can adapt the realmist in the following way:</p>
 <p>1. We go into the game folder. Defaults to: C:/Program Files/World of Warcraft/data</p>

<p>2. We enter C:/Program Files/World of Warcraft/data/esES</p>

<p>3. We use Notepad and open the file "Realmlist.wtf"</p>

<p>4. We delete the text and put the following: set realmlist "realmlist of the server"</p>
Ex: set realmlist logon.moonshard-wow.com 
 
        <p>Download</p>
     </div>
    </div> 
  <Discord/>
  </div> 
);export default Menu



