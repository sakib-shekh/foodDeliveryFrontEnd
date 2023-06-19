import "./App.css";
import Home from "./screens/Home";
import Login from "./screens/Login";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
