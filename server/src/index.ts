import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
});
