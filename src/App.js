// import { Router, Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Checkout } from "./Components/Cart/Checkout";
import { FirstPage } from "./Components/FirstPage/FirstPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={FirstPage} />
        <Route exact path='/checkout' component={Checkout} />
      </Switch>
    </Router>
  );
}

export default App;
