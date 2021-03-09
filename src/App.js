import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ContactDetail from "./pages/ContactDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/contacts/:id">
          <ContactDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
