import Carrsel from '../sections/carrusel.js'
import './stylesComp.css'
import discord from '../img/discordxd.png'


const Home = () => (
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
    <div className='language-style'>
      <div className='select-style'>
        <p>Select Language</p>
        <form>
          <select name="menu">
            <option selected>...</option>
            <option value="4">Opción cuatro</option>
            <option value="5">Opción cinco</option>
            <option value="6">Opción seis</option>
          </select>
        </form>
      </div>
    </div>
    <div className='discord-style'>
      <div className='discord-text'>
        <p>Discord</p>
        <img id='discord-img' src={discord} alt='discordd'/>
      </div >
    </div>
    <div className='welcome-style'>
      <div className='welcome-text'>
        <h4>Welcome to our private server,  </h4> 
        ____________________________________________________________ 
        <p>Moonshard is a private community of World of Warcraft to 
          cataclysm expansion 4.3.4, style of Game Blizz.</p>
      </div>
    </div>
  </div>
);
export default Home