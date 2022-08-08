
import '../assets/css/pages/forum.css';
import '../assets/css/pages/main.css';
import Nav from 'react-bootstrap/Nav';


const Forum = () => (
    <div className='Forum'>
        <br/>
         <div className= "statusPresentationF"></div>
         <br/>
    <div className='menu-forum'>
  
        <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/forum/home" >Home Forums</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/forum/all" eventKey="link-1">All</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/forum/news" eventKey="link-2">News</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/forum/favorites" eventKey="link-3" >Favorites</Nav.Link>
      </Nav.Item>
    </Nav>
    </div>
  
    </div>

);
export default Forum