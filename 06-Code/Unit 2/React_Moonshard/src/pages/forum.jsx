
import '../assets/css/pages/forum.css';
import '../assets/css/pages/main.css';

import Messages from '../components/messages'

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