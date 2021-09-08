import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import PageWrapper from './components/PageWrapper';
import HomePage from './pages/HomePage.js';
import Login from './pages/LoginPage.js';
import Signup from './pages/SignupPage.js';
import Logout from './pages/LogoutPage';
import Dashboard from './pages/Dashboard.js'
import CaesarCipher from './pages/CaesarCipherPage';
import AffineCipher from './pages/AffineCipher';
import SecretPage from './pages/SecretPage';
import SecretDelete from './pages/SecretDelete';
import SecretEdit from './pages/SecretEdit';
import SecretAdd from './pages/SecretAdd';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <PageWrapper />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/caesar" component={CaesarCipher} />
          <Route exact path="/affine" component={AffineCipher} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/logout' component={Logout} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/dashboard/secrets/add' component={SecretAdd} />
          <Route exact path='/dashboard/secrets/:secretID' component={SecretPage} />
          <Route exact path='/dashboard/secrets/:secretID/edit' component={SecretEdit} />
          <Route exact path='/dashboard/secrets/:secretID/delete' component={SecretDelete} />
          </Switch>
      </Router>
    </div>
  );
};

export default App;