import { useState } from "react";
import axios from "../axios";
import { useNavigate } from "react-router-dom";
import "../styles/pages/Form.css";

function AddPet() {
  const [form, setForm] = useState({
    name: "",
    breed: "",
    price: "",
    image_url: "",
  });
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post("/pets", {
        ...form,
        image: form.image_url,
        owner_id: 1,
      });
      alert("Pet Added SuccessFully");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Error Adding Pet");
    }
  }
  return (
    <form className="addPet form" onSubmit={handleSubmit}>
      <h2>Add your Pet for Sell</h2>

      <div className="form_container">
        <input
          type="text"
          name="name"
          value={form.name}
          placeholder="Pet Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="breed"
          value={form.breed}
          placeholder="Pet Breed"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          value={form.price}
          placeholder="Pet Price"
          onChange={handleChange}
          required
        />

        <input
          type="url"
          name="image_url"
          value={form.image_url}
          placeholder="Image URL"
          onChange={handleChange}
          required
        />

        <button className="submit-btn">Add Pet</button>
      </div>
    </form>
  );
}
export default AddPet;
