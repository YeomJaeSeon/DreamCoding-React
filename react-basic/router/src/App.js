import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';

const App = (props) => {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Switch>
        <Route path={['/', '/home']} exact>
          <Home />
        </Route>
        {/* component={} - inline방식으로 하는건 추천되지않아. 라우팅될떄마다 해당 컴포넌트가 언마운팅 -> 마운트 되기떄문에
        성능이 좋지않음  */}
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
