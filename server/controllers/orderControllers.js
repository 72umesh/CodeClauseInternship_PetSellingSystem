import { db } from "../config/db.js";

export const placeOrder = (req, res) => {
  const { pet_id, buyer_name, buyer_email, address, amount } = req.body;
  const user_id = req.userId;

  console.log("BODY:", req.body);
  console.log("USER ID:", req.userId);

  if (
    !user_id ||
    !pet_id ||
    !buyer_name ||
    !buyer_email ||
    !address ||
    !amount
  ) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const q = `
    INSERT INTO orders (user_id, pet_id, buyer_name, buyer_email, address, amount)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    q,
    [user_id, pet_id, buyer_name, buyer_email, address, amount],
    (error, result) => {
      if (error) {
        console.error("❌ Order Insert Error:", error);
        return res.status(500).json("Failed to place order");
      }
      res.status(200).json("Order Placed Successfully");
    }
  );
};
