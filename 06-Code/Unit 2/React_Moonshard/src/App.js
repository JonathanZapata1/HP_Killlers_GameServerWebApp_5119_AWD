import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// PAGES
import Home from "./pages/home"
import Register from "./pages/register"
import HowToConnect from "./pages/howToConnect";
import StatusServer from "./pages/statusServer";
import TopPlayers from "./pages/topPlayers";
import PageNotFound from "./pages/pageNotFound";
import Powerslap from "./assets/media/video.mp4";
import Forum from "./pages/forum";
import HomeForum from "./pages/homeforum"
import All from "./pages/allForum"
import News from "./pages/newsForum"
import Favorites from "./pages/favoriteForum"
//Components
import Header from "./components/Header"
import Footer from "./components/footer";


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
          <Route path="/forum/home" exact component={HomeForum}></Route>
          <Route path="/forum/all" exact component={All}></Route>
          <Route path="/forum/News" exact component={News}></Route>
          <Route path="/forum/Favorites" exact component={Favorites}></Route>
          <Route component={PageNotFound}/>
        </Switch>

        <Footer/>
      </Router>
      </div>

  </div>
)

export default App