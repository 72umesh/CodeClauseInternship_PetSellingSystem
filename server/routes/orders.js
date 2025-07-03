import express from "express";
import { placeOrder } from "../controllers/orderControllers.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { db } from "../config/db.js";

const router = express.Router();

router.get("/orders", (req, res) => {
  const q = "SELECT * FROM orders";
  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    res.status(200).json(data);
  });
});
router.post("/orders", verifyToken, placeOrder);

export default router;
