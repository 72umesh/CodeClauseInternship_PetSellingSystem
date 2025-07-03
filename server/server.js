import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import { db } from "./config/db.js";
import petRoutes from "./routes/pets.js";
import orderRoutes from "./routes/orders.js";

dotenv.config();

const app = express();

app.use(
  cors({ origin: "https://pet-selling-system.vercel.app", credentials: true })
);
app.use(express.json());

// app.get("/", (req, res) => res.send("Server is running"));

app.use("/api", authRoutes);
app.use("/api", petRoutes);
app.use("/api/orders", orderRoutes);

db.connect((error) => {
  if (error) console.error("DB connection failed:", error);
  else console.log("Mysql connected");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
