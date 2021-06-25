import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Register from './components/dashboard/Register';
import Login from './components/dashboard/Login';
import useToken from './hooks/useToken';
import SaveUserName from './hooks/SaveUserName';
import NavBar from './components/generic/Navbar';
import Home from './components/Home';
import Authenticated from './components/Routes/Authenticated';

function App() {
  const { token, setToken } = useToken();
  const { userName, saveUserName } = SaveUserName();
  console.log('userName in App', userName);
  return (
    <div className="wrapper">
      <NavBar loggedIn={token ? true : false} />
      <div className="innerWrapper">
        <BrowserRouter>
          <Switch>
            <Route path="/home">
              <Home isLoggedIn={token ? true : false} />
            </Route>
            <Route path="/login">
              <Login setToken={setToken} setGlobalUserName={saveUserName} />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            {token && <Authenticated username={userName} />}
            <Redirect from="/" to="/home" />
          </Switch>
        </BrowserRouter>
      </div>
    </div>);
}

export default App;
