import Header from "./sections/Header"
import Home from "./pages/home"
import Register from "./pages/register"
import HowToConnect from "./pages/howToConnect";
import StatusServer from "./pages/statusServer";
import TopPlayers from "./pages/topPlayers";

import PageNotFound from "./pages/pageNotFound";
import Powerslap from "./video/video.mp4";
import Forum from "./pages/forum";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./sections/footer";


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
     <div>
     <Router>
        <Header />
        <Switch>
          <Route path="/register" exact component={Register}/>
          <Route path="/how-to-connect"exact component={HowToConnect}/>
          <Route path="/status-server" exact component={StatusServer}/>
          <Route path="/top-players" exact component={TopPlayers}/>
          <Route path="/forum" exact component={Forum}/>

          <Route path="/" exact component={Home}/>
          <Route component={PageNotFound}/>
          
        </Switch>
        <br/>
        <Footer/>
      </Router>
      </div>

  </div>
)

export default App