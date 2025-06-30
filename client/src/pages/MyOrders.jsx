import { useEffect, useState } from "react";
import axios from "../axios";
import "../styles/pages/MyOrders.css";

function MyOrders() {
  const [orders, setOrders] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("/orders", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        setOrders(res.data);
      } catch (err) {
        console.error("Failed to fetch orders:", err);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="ordersPage">
      <h2>Your Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="orders-grid">
          {orders.map((order) => (
            <div className="order-card" key={order.id}>
              <p>
                <strong>Pet ID:</strong> {order.pet_id}
              </p>
              <p>
                <strong>Name:</strong> {order.buyer_name}
              </p>
              <p>
                <strong>Email:</strong> {order.buyer_email}
              </p>
              <p>
                <strong>Amount:</strong> ₹{order.amount}
              </p>
              <p>
                <strong>Address:</strong> {order.address}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyOrders;
