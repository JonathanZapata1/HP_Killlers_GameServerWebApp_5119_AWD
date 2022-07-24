import Carrsel from '../sections/carrusel.js'
import './stylesComp.css'
import Discord from '../sections/discord.js'
import Information from '../sections/information.js'
import Language from '../sections/selectlanguage.js'

const Home = () => (
  <div>
     <Carrsel/>
     <Information/>
    <Language/>
    <Discord/>
    <div className='down-style'>
      <div className='down-text'>
        <h4>Welcome to our private server, </h4> 
        ____________________________________________________________ 
        <p>Moonshard is a private community of World of Warcraft to 
          cataclysm expansion 4.3.4, style of Game Blizz.</p>
      </div>
    </div>
  </div>
);
export default Home