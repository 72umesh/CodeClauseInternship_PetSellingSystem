import { useNavigate, useParams } from "react-router-dom";
import axios from "../axios";
import { useEffect, useState } from "react";
import "../styles/pages/Form.css";
import "../styles/pages/BuyPet.css";

function BuyPet() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pet, setPet] = useState(null);
  const [formData, setFormData] = useState({
    buyer_name: "",
    buyer_email: "",
    address: "",
  });

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const res = await axios.get(`/pets/${id}`);
        setPet(res.data);
      } catch (error) {
        alert("Failed to Load Pet");
        console.error(error);
      }
    };
    fetchPet();
  }, [id]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      await axios.post(
        "/orders",
        {
          ...formData,
          pet_id: pet.id,
          amount: pet.price,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Order Placed successfully");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Order Failed");
    }
  }

  if (!pet) return <h3>Loading...</h3>;
  return (
    <div className="buyPet form">
      <div className="pet_details">
        <h2>{pet.name}</h2>
        <img src={pet.image} alt={pet.name + pet.breed} />
        <p>{pet.breed}</p>
      </div>

      <form onSubmit={handleSubmit} className="form_container order-form">
        <input
          type="text"
          name="buyer_name"
          placeholder="Your name"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="buyer_email"
          placeholder="Your Email"
          onChange={handleChange}
          required
        />
        <textarea
          type="address"
          name="address"
          placeholder="Delivery Address"
          onChange={handleChange}
          required
        />
        <button type="submit" className="submit-btn submit">
          Place Order
        </button>
      </form>
    </div>
  );
}
export default BuyPet;
