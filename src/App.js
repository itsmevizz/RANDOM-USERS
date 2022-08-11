import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./Pages/Home";
import User from "./Pages/User";

function App() {
  return (
   <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/user" element={<User/>} />
      </Routes>
    </Router>
  </div>
  )
}

export default App;
