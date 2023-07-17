import "./App.css";
import Home from "./screens/Home";
import Login from "./screens/Login";
import ProductView from "./screens/ProductView";
import Register from "./screens/Register";
import Search from "./screens/Search";
import Cart from "./screens/Cart";
import Temp from "./screens/Temp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/search" element={<Search />}></Route>
          <Route exact path="/product" element={<ProductView />}></Route>
          <Route exact path="/product" element={<ProductView />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
          <Route exact path="/temp" element={<Temp/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
