// import { Router, Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Checkout } from "./Components/Cart/Checkout";
import Admin from "./Components/Admin/Admin";
import AdminProducts from "./Components/Admin/AdminProducts";
import AdminUsers from "./Components/Admin/AdminUsers";
import EditGame from "./Components/Admin/EditGame";
import AddProduct from "./Components/Admin/AddProduct";
import AddGame from "./Components/Admin/AddGame";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer/Footer";
import { FirstPage } from "./Components/FirstPage/FirstPage";
import { Home } from "./Components/Home";
import Detail from "./Components/Detail/Detail.jsx";
import NavBar from "./Components/NavBar/index.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Wishlist from './Components/Whishlist'


function App() {
  return (
    <>
      <NavBar />
    <Router>
      <Switch>
        <Route exact path="/" component={FirstPage} />
        <Route path="/">
          <NavBar />
          <Route exact path="/home" component={Home} />
          <Route exact path="/details/:id" component={Detail} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/whislist" component={Wishlist} />
          <Route exact path='/admin' component={Admin} />
          <Route exact path='/admin-products' component={AdminProducts} />
          <Route exact path='/admin-users' component={AdminUsers} />
          <Route exact path='/edit-game/:id' component={EditGame} />
          <Route exact path='/add-product/:id' component={AddProduct} />
          <Route exact path='/addgame' component={AddGame} />
          <Footer />
        </Route>
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
