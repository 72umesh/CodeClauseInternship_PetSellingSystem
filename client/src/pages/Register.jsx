import { useState } from "react";
import axios from "../axios";
import { useNavigate } from "react-router-dom";
import "../styles/pages/Form.css";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

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
      const res = await axios.post(
        "http://localhost:5000/api/register",
        formData
      );
      alert("Registered successfully!");
      navigate("/login");
    } catch (error) {
      alert("Registration Failed");
      console.error(error);
    }
  }
  return (
    <form onSubmit={handleSubmit} className="registerPage form">
      <h2>Create Your Account</h2>

      <div className="registerPage_container form_container">
        <label htmlFor="Pname">Name</label>
        <input
          name="name"
          type="text"
          onChange={handleChange}
          placeholder="Enter Your Name"
          id="Pname"
        />

        <label htmlFor="Pemail">Email</label>
        <input
          name="email"
          type="text"
          onChange={handleChange}
          placeholder="Enter Your Email"
          id="Pemail"
        />

        <label htmlFor="Ppassword">Password</label>
        <input
          name="password"
          type="password"
          onChange={handleChange}
          placeholder="Password"
          id="Ppassword"
        />
        <button type="submit" className="register_btn submit-btn">
          Register
        </button>
      </div>
    </form>
  );
}
export default Register;
