import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  generateImage,
  getImageRequests,
} from "../controllers/imageRequest.controller.js";

const router = express.Router();

router.post("/generate", protectRoute, generateImage);
router.get("/all", protectRoute, getImageRequests);

export default router;
