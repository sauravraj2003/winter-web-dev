import logo from './logo.svg';
import './index.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.css';
import Create from './create';
import Blogdetails from './Blogdetails';
import SignIn from './sign-in';
import Notfound from './Notfound';

function App() {

  return (
    <Router>
    <div className="App">

      <Navbar />
      <div className="content">
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path="/create">
          <Create />
        </Route>

        <Route exact path='/Blogdetails/:id'>
          <Blogdetails />
        </Route>

        <Route exact path='/signin'>
          <SignIn />
        </Route>

        <Route  path='*'>
          <Notfound />
        </Route>

      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
