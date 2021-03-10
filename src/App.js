import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AddContact from "./pages/AddContact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/add">
          <AddContact />
        </Route>
        <Route exact path="/contacts/:id">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
