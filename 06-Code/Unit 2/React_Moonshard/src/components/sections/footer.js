import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter,faYoutube,faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer >
        <div className="waves">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
         <path fill="#0B0B0C" fill-opacity="0.9" d="M0,320L80,298.7C160,277,320,235,480,224C640,213,800,235,960,224C1120,213,1280,171,1360,149.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
       </svg>
         </div>
            <div className='footer1 container-fluid p-5'>
                <div className="row m-3">
                  <div className='col py-2'>
                   <p className='footer-p px-5 m-4'>This is a faithful PHP proyect copy, believe us</p> 
                   
                  </div>
                  <div className='col py-2'>
                    <div className='socialmedia-text  p-2 row'>
                   <p className='footer-p p-3 '>Find us in our Social Network</p>
                   </div>
                   <div className='socialmedia  p-2 row'>
                    <div className="col p-2 twitter d-flex  justify-content-center"> 
                    <a href="https://twitter.com/Warcraft" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon className="display-3" icon={faTwitter} /></a>
                    </div>
                    <div className="col p-2 youtube d-flex justify-content-center"> 
                    <a href="https://www.youtube.com/channel/UClFq2cRKzpAheTQQuo8FkjA" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon className="display-3" icon={faYoutube} /></a>   
                    </div>
                    <div className="col p-2 github d-flex justify-content-center"> 
                    <a href="https://github.com/jizapata3/HP_Killlers_GameServerWebApp_5119_AWD" target="_blank" rel="noreferrer" >
                    <FontAwesomeIcon className="display-3" icon={faGithub} /></a>    
                    </div>
                    </div>

                  </div>
                  <div className='col'>
                    <p className='footer-p px-5 m-4'>Created
                   by Team Hp-Killers in React</p> 
                  </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;