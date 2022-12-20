import "bootstrap/dist/css/bootstrap.css";
import Home from "../src/components/Home";
import Navbar from "../src/components/Navbar";
import Subs from "./components/Subs";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Subs" component={Subs} />
      </Switch>
    </>
  );
}

export default App;
