import { db } from "../config/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = (req, res) => {
  const { name, email, password } = req.body;
  console.log("register request:", name, email);

  const q = "SELECT * FROM users WHERE email = ?";
  db.query(q, [email], async (error, data) => {
    if (error) {
      console.log("Select query error:", error);
      return res.status(500).json(error);
    }
    if (data.length) {
      console.log("user exist");
      return res.status(409).json("User already exists!");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const insertQ =
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    db.query(insertQ, [name, email, hashedPassword], (error, result) => {
      if (error) {
        console.log(" error", error);
        return res.status(500).json(error);
      }
      res.status(200).json("User registered successfully");
    });
  });
};
export const loginUser = (req, res) => {
  const { email, password } = req.body;

  const q = "SELECT * FROM users WHERE email = ?";
  db.query(q, [email], async (err, data) => {
    if (err) return res.status(500).json(err);
    if (!data.length) return res.status(404).json("User not found");

    const isMatch = await bcrypt.compare(password, data[0].password);
    if (!isMatch) return res.status(401).json("Invalid credentials");

    const user = data[0];
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "2d",
    });

    const { password: _, ...userData } = user;
    res
      .status(200)
      .json({ message: "Login successful", token, user: userData });
  });
};
