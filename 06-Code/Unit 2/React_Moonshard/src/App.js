<<<<<<< HEAD:06-Code/Unit 2/React_Moonshard/src/App.js
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// PAGES
import Home from "./pages/home"
import Register from "./pages/register"
=======
import Header from "./sections/header";
import Home from "./pages/home";
import Register from "./pages/register";
>>>>>>> d4fb267b4063c7177b1373f0c4930d0e4dde2bf1:06-Code/Unit 2/React_Moonshard/src/components/App.js
import HowToConnect from "./pages/howToConnect";
import StatusServer from "./pages/statusServer";
import TopPlayers from "./pages/topPlayers";
import PageNotFound from "./pages/pageNotFound";
import Powerslap from "./assets/media/video.mp4";
import Forum from "./pages/forum";
<<<<<<< HEAD:06-Code/Unit 2/React_Moonshard/src/App.js


//Components
import Header from "./components/Header"
import Footer from "./components/footer";
=======
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./sections/footer";
import './App.css'
>>>>>>> d4fb267b4063c7177b1373f0c4930d0e4dde2bf1:06-Code/Unit 2/React_Moonshard/src/components/App.js


const App = () => (
  <div>
    <video  autoPlay loop muted
    style={{
    position: "fixed",
    repeat:"no-repeat",
    attachment:"fixed",
    size:"cover",
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

        <Footer/>
      </Router>
      </div>

  </div>
)

export default App