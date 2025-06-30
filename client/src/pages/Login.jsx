import { useState } from "react";
import axios from "../axios";
import { useNavigate } from "react-router-dom";
import "../styles/pages/Form.css";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await axios.post("/login", formData);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      alert("Login Successfull");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Login Failed");
    }
  }
  return (
    <form onSubmit={handleSubmit} className="loginPage form">
      <h2>Login</h2>

      <div className="loginPage_container form_container">
        <input
          type="text"
          name="email"
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button type="submit" className="login_btn submit-btn">
          Login
        </button>
      </div>
    </form>
  );
}
export default Login;
