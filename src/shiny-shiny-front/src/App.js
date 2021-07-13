import { Container } from "react-bootstrap";
import Header from "./components/Header/Header";
import { UserTableContainer } from "./components/containers/UserTableContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import { ToastContainer } from "react-toastify";

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
          <Route path="/users">
            <UserTableContainer />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
