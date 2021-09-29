import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import About from './components/About/About';
import Notfound from './components/Notfound/Notfound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Culture from './components/Culture/Culture';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/friends">
            <Friends />
          </Route>
          <Route path="/friend/:friendId">
            <FriendDetail />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/about/culture">
            <Culture />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <Notfound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
