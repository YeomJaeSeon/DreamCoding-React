import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';

function App({ authService, FileInput }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Login authService={authService} />
        </Route>
        <Route path="/app" exact>
          <Main authService={authService} FileInput={FileInput} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
