<<<<<<< HEAD:06-Code/Unit 2/React_Moonshard/src/pages/forum.jsx

import '../assets/css/pages/forum.css';
import '../assets/css/pages/main.css';

import Messages from '../components/messages'
=======
import './stylesComp.css'
import Messages from '../sections/messages'
>>>>>>> d4fb267b4063c7177b1373f0c4930d0e4dde2bf1:06-Code/Unit 2/React_Moonshard/src/components/pages/forum.js

const Forum = () => (
    <div className='grid forum p-2'>
        <div className='row'>
            <div className='col p-2'>
                    <p>
                        Find by name:
                    </p>
                    <button className='btn btn-primary'>
                        FIND
                    </button>
                   
            </div>
            <div className='col p-2'>
            
            </div>
            
        </div>
        <Messages/>
    </div>

);
export default Forum