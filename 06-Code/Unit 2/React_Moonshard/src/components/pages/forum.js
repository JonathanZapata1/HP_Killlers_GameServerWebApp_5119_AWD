import './stylesComp.css'
import '../sections/header.css'
import Messages from '../sections/messages'

const Forum = () => (
    <div className='grid forum p-2'>
        <div className='row'>
            <div className='col p-2 centered'>
                    <h2 className='white'> Forum Finder </h2>
                    <p>
                        Find by name:
                    </p>
                    <input type="text">
                    </input>
                    <button className='btn btn-primary btn-block'>
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