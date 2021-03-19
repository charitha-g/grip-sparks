
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import RegisterPage from './pages/register'

function App() {
  return (
    <Router>
      {/* <Switch>
          <Router path="/" component={Home} exact/>
          <Router path="/register" component={RegisterPage} exact/>

      </Switch> */}
      <Home/>
    </Router>
  );
}

export default App;
