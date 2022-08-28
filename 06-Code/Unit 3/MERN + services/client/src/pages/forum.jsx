
import '../assets/css/pages/forum.css';
import '../assets/css/pages/main.css';
import HomeForum from '../components/homeForum';
import TableForum from '../components/tableForum';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Forum = () => (
  <div className='Forum'>
    <br />
    <div className="statusPresentationF"></div>
    <br />
    <div className='menu-forum'>
    <Tabs
      defaultActiveKey="home"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title="Home Forums">
        <HomeForum/>
      </Tab>
      <Tab eventKey="all" title="All ">
        <TableForum/>
      </Tab>
      <Tab eventKey="favorite" title="Favorites" >
      <TableForum/>
      </Tab>
    </Tabs>
    </div>

  </div>

);
export default Forum