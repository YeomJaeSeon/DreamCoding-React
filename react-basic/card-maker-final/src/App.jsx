import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';

function App({ authService, FileInput, database }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Login authService={authService} />
        </Route>
        <Route path="/app" exact>
          <Main
            authService={authService}
            FileInput={FileInput}
            database={database}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
