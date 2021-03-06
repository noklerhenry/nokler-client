import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
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
import Footer from "./Components/Footer/Footer.jsx";
import WishList from "./Components/WishList";
import Gallery from "./Components/Gallery/Gallery.jsx";
import ContactForm from "./Components/Contact";
import UserProfile from "./Components/Admin/UserProfile";
import { useAuth0 } from "@auth0/auth0-react";
import UserOut from "./Components/Admin/UserOut";
import FAQs from "./Components/FAQs";
import NotFound from "./Components/NoFound";
import About from "./Components/About";
import Refund from "./Components/Refund/Refund";
import RefundList from "./Components/Refund/RefundList";
import checkRole from "./Components/Admin/CheckProfile";
import { useState, useEffect } from "react";
import axios from 'axios';
import SuccessMessage from "./Components/Cart/SuccessfulMessage";
import ErrorMessage from "./Components/Cart/ErrorMessage";
import WarningLogInMessage from "./Components/Cart/LogInMessage";

import RefundAproval from "./Components/Refund/RefundAproval";

function App() {

  const { isAuthenticated, isLoading, user } = useAuth0();

  const [userData, setUserData] = useState('')

  useEffect(() => {
    
    axios.get('https://nokler-api.herokuapp.com/getUserByEmail?email=' + user?.email)
        .then((response) =>{
            setUserData(response.data[0])
            //return response;
          })
    
  }, [user]);

  const userRole = async() => await checkRole()

  return (
    <>
      <Router>
        <Header />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/details/:nameid" component={Detail} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/wishlist" component={WishList} />
            <Route exact path="/admin" component={isAuthenticated &&userData?.rol == 'ADMIN' ? Admin : UserOut} /> 
            <Route exact path="/admin-products" component={isAuthenticated && userData?.rol == 'ADMIN' ? AdminProducts : UserOut} />
            <Route exact path="/admin-users" component={isAuthenticated && userData?.rol == 'ADMIN' ? AdminUsers : UserOut} />
            <Route exact path="/edit-game/:nameid" component={isAuthenticated && userData?.rol == 'ADMIN' ? EditGame : UserOut} />
            <Route exact path="/add-product/:id" component={isAuthenticated && userData?.rol == 'ADMIN' ? AddProduct : UserOut} />
            <Route exact path="/addgame" component={isAuthenticated  ? AddGame : UserOut} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/contact" component={ContactForm} />
            <Route exact path="/frecuent-questions" component={FAQs} />
            <Route exact path="/about" component={About} />
            <Route exact path="/user-out" component={UserOut} />
            <Route exact path="/profile" component={isAuthenticated ? UserProfile : UserOut } />
            <Route exact path="/refund" component={isAuthenticated ? Refund : UserOut } />
            <Route exact path="/refundlist" component={isAuthenticated ? RefundList : UserOut } />
            <Route exact path="/refundaproval/:id" component={isAuthenticated ? RefundAproval : UserOut } />
            <Route exact path='/error' component={ErrorMessage}/>
            <Route exact path='/success' component={SuccessMessage}/>
            <Route exact path='/warning' component={WarningLogInMessage}/>
            <Route path='*'>
                <NotFound />
            </Route>
            {/* {  <Route exact path="/profile" component={UserProfile} /> && isAuthenticated ? <Route exact path="/profile" component={UserProfile} /> : <Redirect to="/user-out" /> } */}
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
