import { Container } from "react-bootstrap";
import Header from "./components/Header/Header";
import { UserTableContainer } from "./components/containers/UserTableContainer";
import { ProductTableContainer } from "./components/containers/ProductTableContainer";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./components/Home/Home";
import { ToastContainer } from "react-toastify";
import Registration from "./components/Registration/Registration";
import SecuredRoute from "./common/SecuredRoute";
import Login from "./components/Login/Login";
import { ProductListContainer } from "./components/containers/ProductListContainer";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <Router>
      <ToastContainer />
      <Header />
      <Container>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/register">
            <Registration />
          </Route>
          <Route path="/products">
            <ProductListContainer />
          </Route>
          <SecuredRoute path="/cart">
            <Cart />
          </SecuredRoute>
          <Route path="/login">
            <Login />
          </Route>
          <SecuredRoute path="/admin/products">
            <ProductTableContainer />
          </SecuredRoute>
          <SecuredRoute path="/admin/users">
            <UserTableContainer />
          </SecuredRoute>
          <Route path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
