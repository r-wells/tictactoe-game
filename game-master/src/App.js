import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Register from './components/dashboard/Register';
import Login from './components/dashboard/Login';
import useToken from './hooks/useToken';
import NavBar from './components/dashboard/Navbar';
import Game from './components/tictactoe/Game';

function App() {
  const { token, setToken } = useToken();

  if (!token && window.location.pathname !== "/register") {
    return <div className="wrapper"><NavBar loggedIn={false} /><Login setToken={setToken} /></div>;
  }

  return (
    <div className="wrapper">
      <NavBar loggedIn={token ? true : false} />
      <div className="innerWrapper">
        <BrowserRouter>
          <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/play">
              <Game />
            </Route>
            <Redirect from="/" to="/dashboard" />
          </Switch>
        </BrowserRouter>
      </div>
    </div>);
}

export default App;
