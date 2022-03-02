import "./App.css";
import HomePage from "./pages/HomePage";
import { Route,  Switch } from "react-router-dom";
import Mens from "./pages/mens";
import Womens from "./pages/womens";
import Signup from "./components/signup";
import Signin from "./components/signin";
import Cart from "./components/cart";
import ShopProducts from "./pages/ShopProducts";
import SearchByBrand from "./components/searchByBrand";
import Payment from "./pages/payment";
import Otp from "./pages/otp";
import { useCookies } from 'react-cookie';

function App() {
  const [cookies, setCookie] = useCookies(['user']);

  return (
    <>
        
          <Switch>
            <Route exact path="/" component={ (cookies.user && cookies.user !== "null") ? HomePage : Signup} />
            <Route exact path="/signin" component={Signin}/>
            <Route exact path="/homepage" component={(cookies.user && cookies.user !== "null") ? HomePage : Signin} />
            <Route path="/menscollection" component={Mens} />
            <Route path="/womenscollection" component={Womens} /> 
            <Route path="/cart" component={(cookies.user && cookies.user !== "null") ? Cart : Signin} /> 
            <Route path="/shopAll" component={ShopProducts} />
            <Route path="/searchByBrand" component={SearchByBrand} />
            <Route path="/pay" component={(cookies.user && cookies.user !== "null") ? Payment : Signin} />
            <Route path="/checkout" component={Otp} />
          </Switch>

    </>
  );
}

export default App;
