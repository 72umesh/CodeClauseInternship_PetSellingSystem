import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddPet from "./pages/AddPet";
import BuyPet from "./pages/BuyPet";
import axios from "axios";
import MyOrders from "./pages/MyOrders";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-pet" element={<AddPet />} />
          <Route path="/buy/:id" element={<BuyPet />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="orders" element={<MyOrders />} />
          <Route
            path="*"
            element={<h1 className="NotFound">404 Not Found</h1>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
