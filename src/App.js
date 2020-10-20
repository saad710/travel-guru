import React, { createContext, useState } from 'react';
import './App.css';
import Coxbazar from './Coxbazar';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './NoMatch';
import Sremangal from './Sremangal';
import Sundarbans from './Sundarbans';
import Login from './Login';
import CoxHotel from './CoxHotel';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
      <Route path = "/home">
        <Home/>
      </Route>
      <Route path = "/coxbazar">
        <Coxbazar/>
      </Route>
      <Route path = "/sremangal">
        <Sremangal/>
      </Route>
      <Route path = "/sundarban">
        <Sundarbans/>
      </Route>
      <Route path = "/login">
        <Login/>
      </Route>
      <Route path = "/coxhotel">
        <CoxHotel/>
      </Route>
      <Route exact path = "/">
        <Home/>
      </Route>
      <Route path = "*">
        <NoMatch/>
      </Route>
      </Switch>
     </Router>
     </UserContext.Provider>
  );
}

export default App;
