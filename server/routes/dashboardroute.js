import express from "express";
import { getDashboardStats } from "../controllers/dashboardController.js";
import { authFlex } from "../middleware/authFlex.js";
// import { activityLogger } from "../middleware/activityLogger.js";

const router = express.Router();

router.get("/", authFlex, getDashboardStats);

export default router;