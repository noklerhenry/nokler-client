import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Checkout } from "./Components/Cart/Checkout";
import Admin from "./Components/Admin/Admin";
import AdminProducts from "./Components/Admin/AdminProducts";
import AdminUsers from "./Components/Admin/AdminUsers";
import EditGame from "./Components/Admin/EditGame";
import AddProduct from "./Components/Admin/AddProduct";
import AddGame from "./Components/Admin/AddGame";
import { Home } from "./Components/Home";
import Detail from "./Components/Detail/Detail.jsx";
import Header from "./Components/Header";
//import NavBar from "./Components/NavBar/index.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Wishlist from "./Components/Whishlist";

function App() {
  return (
    <>
      <Router>
      <Header />
        <Switch>
          {/* <Route exact path="/" component={FirstPage} /> */}
          <Route path="/">
            <Route exact path="/" component={Home} />
            <Route exact path="/details/:id" component={Detail} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/whislist" component={Wishlist} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/admin-products" component={AdminProducts} />
            <Route exact path="/admin-users" component={AdminUsers} />
            <Route exact path="/edit-game/:id" component={EditGame} />
            <Route exact path="/add-product/:id" component={AddProduct} />
            <Route exact path="/addgame" component={AddGame} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
