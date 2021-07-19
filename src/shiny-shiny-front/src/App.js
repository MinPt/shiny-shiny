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
          <Route path="/products">
            <ProductTableContainer />
          </Route>
          <Route path="/register">
            <Registration />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <SecuredRoute path="/users">
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
