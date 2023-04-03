import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  useRouteMatch,
  useParams,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registrazione from "./pages/Registrazione";


function App() {
  return (
    <div className="App">
      <Router>
        
        <Routes>

          <Route element={<Login />} path="/"></Route>
          <Route element={<Registrazione />} path="/registrazione"></Route>
          <Route element={<Home />} path="/home"></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
