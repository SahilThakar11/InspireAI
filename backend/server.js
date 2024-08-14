import express from "express";
import dotenv from "dotenv";
import connectMongoDB from "./config/db.js";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import imageRequestRoutes from "./routes/imageRequest.routes.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/imageRequest", imageRequestRoutes);

app.listen(PORT, () => {
  connectMongoDB();
  console.log(`Server is running on port ${PORT}`);
});
