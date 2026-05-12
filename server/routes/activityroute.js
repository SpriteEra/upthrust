import express from "express";
import {
    getActivityLogs,
    getActivityStats,
    clearActivityLogs,
} from "../controllers/activityController.js";
import { authFlex } from "../middleware/authFlex.js";

const router = express.Router();

router.get("/", authFlex, getActivityLogs);
router.get("/stats", authFlex, getActivityStats);
router.delete("/", authFlex, clearActivityLogs);

export default router;