import express from "express";
import { addPet, getAllPets } from "../controllers/petController.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { db } from "../config/db.js";

const router = express.Router();

router.get("/pets", getAllPets);

router.get("/pets/:id", (req, res) => {
  const q = "SELECT * FROM pets WHERE id = ?";
  db.query(q, [req.params.id], (err, data) => {
    if (!data || data.length === 0) {
      return res.status(404).json({ message: "Pet Not foun" });
    }
    if (err) return res.status(500).json(err);
    res.status(200).json(data[0]);
  });
});

router.post("/pets", addPet);

export default router;
