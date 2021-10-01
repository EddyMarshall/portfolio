import { Splash, Programming, Contact } from "./components"
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/application.scss';

function App() {
  return (
    <div className="body">
      <Router>
        <Switch>
          <Route exact path="/" component={Splash}/>
          <Route exact path="/programming" component={Programming} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
