import logo from "./logo.svg";
import "./App.css";
import NavBar from "./customs/NavBar";
import Navigation from "./navigation";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Navigation />
    </Router>
  );
};

export default App;
