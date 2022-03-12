// import { Router, Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Checkout } from "./Components/Cart/Checkout";
import { FirstPage } from "./Components/FirstPage/FirstPage";
import { Home } from "./Components/Home";
import Detail from "./Components/Detail/Detail.jsx";
import NavBar from "./Components/NavBar/index.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Wishlist from './Components/Whishlist'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={FirstPage} />
        <Route path="/">
          <NavBar />
          <Route exact path="/home" component={Home} />
          <Route exact path="/details/:id" component={Detail} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/whislist" component={Wishlist} />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
