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

function App() {
  return (
    <>
      <NavBar />
    <Router>
      <Switch>
      <Route exact path='/' component={FirstPage} />
        <Route exact path='/' component={FirstPage} />
        <Route exact path='/checkout' component={Checkout} />
        <Route exact path='/admin' component={Admin} />
        <Route exact path='/admin-products' component={AdminProducts} />
        <Route exact path='/admin-users' component={AdminUsers} />
        <Route exact path='/edit-game/:id' component={EditGame} />
        <Route exact path='/add-product/:id' component={AddProduct} />
        <Route exact path='/addgame' component={AddGame} />

      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
