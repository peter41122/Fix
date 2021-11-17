import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Splash from './pages/splash';
import Signin from './pages/signin';
import Signup from './pages/signup';
// import Dashboard from './pages/dashboard';
import Getstarted from './pages/getstarted';
import Checkout from './pages/checkout';
import Checkoutconfirm from './pages/checkoutconfirm';

const App = () => (
  <Router>
    <div className="flex-1">
      <Switch>
        <Route exact path="/">
          <Splash />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/getstarted">
          <Getstarted />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/checkoutconfirm">
          <Checkoutconfirm />
        </Route>
        {/* <Route path="/dashboard">
          <Dashboard />
        </Route> */}
      </Switch>
    </div>
  </Router>
);

export default App;
