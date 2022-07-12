import Header from "./sections/Header"
import Home from "./pages/home"
import Register from "./pages/register"
import HowToConnect from "./pages/howToConnect";
import StatusServer from "./pages/statusServer";
import TopPlayers from "./pages/topPlayers";
import Contact from "./pages/contact";
import Powerslap from "./video/video.mp4";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const App = () => (
  <div>
    <video  autoPlay loop muted
    style={{
    position: "fixed",
    width: "100%",
    left: "50%",
    top: "50%",
    height: '100%',
    objectFit: 'cover',
    transform: 'translate(-50%, -50%)',
    zIndex:'-1'
  }}>
  <source src={Powerslap} type="video/mp4" />
   </video>
     <div className="header">
      <Router>
        <Header />
        <Switch>
          <Route path="/register"><Register /></Route>
          <Route path="/how-to-connect"><HowToConnect /></Route>
          <Route path="/status-server"><StatusServer /></Route>
          <Route path="/top-players"><TopPlayers /></Route>
          <Route path="/contact"><Contact /></Route>

          <Route path="/"><Home /></Route>
        </Switch>
      </Router>
      </div>
      <br/>
  </div>
)

export default App