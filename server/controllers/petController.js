import { db } from "../config/db.js";

export const addPet = (req, res) => {
  const { name, breed, price, image } = req.body;
  const owner_id = req.userId;

  const q =
    "INSERT INTO pets (name, breed, price, image, owner_id) VALUES (?, ?, ?, ?, ?)";
  db.query(q, [name, breed, price, image, owner_id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(200).json({ message: "Pet added successfully" });
  });
};
export const getAllPets = (req, res) => {
  const q = "SELECT * FROM pets";
  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    res.status(200).json(data);
  });
};
