import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import { db } from "./config/db.js";
import petRoutes from "./routes/pets.js";
import orderRotes from "./routes/orders.js";

dotenv.config();

const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

// app.get("/", (req, res) => res.send("Server is running"));

app.use("/api", authRoutes);
app.use("/api", petRoutes);
app.use("/api", orderRotes);

db.connect((error) => {
  if (error) console.error("DB connection failed:", error);
  else console.log("Mysql connected");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on https://localhost:${process.env.PORT}`);
});
