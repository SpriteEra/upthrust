import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authroute.js";
import pageRoutes from "./routes/pageroute.js";
import faqRoutes from "./routes/faqroute.js";
import mediaRoutes from "./routes/bunnyroute.js";
import formUrlRoutes from "./routes/formurlroute.js";
import dashboardRoutes from "./routes/dashboardroute.js";
import activityRoutes from "./routes/activityroute.js";
import { globalLimiter } from "./middleware/rateLimiter.js";
import activityLogger from "./middleware/activityLogger.js";

dotenv.config();

const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}));

app.use(cookieParser());

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true, limit: "1mb" }));

//  rate limiter (200 req / 15 min per IP) 
app.use(globalLimiter);
app.use(activityLogger);   //  activity logger 

connectDB();

app.get("/", (req, res) => res.send("Server is running!"));

app.use("/api/auth", authRoutes);
app.use("/api/pages", pageRoutes);
app.use("/api/faqs", faqRoutes);
app.use("/api/media", mediaRoutes);
app.use("/api/form-urls", formUrlRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/activity", activityRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
