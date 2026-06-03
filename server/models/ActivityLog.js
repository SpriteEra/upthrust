import mongoose from "mongoose";

const activityLogSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            default: null,
        },
        userName: {
            type: String,
            default: "Anonymous",
        },
        userEmail: {
            type: String,
            default: null,
        },
        action: {
            type: String,
            required: true,
        },
        method: {
            type: String,
            enum: ["GET", "POST", "PUT", "PATCH", "DELETE"],
            required: true,
        },
        route: {
            type: String,
            required: true,
        },
        statusCode: {
            type: Number,
            default: null,
        },
        ipAddress: {
            type: String,
            default: null,
        },
        userAgent: {
            type: String,
            default: null,
        },
        meta: {
            type: mongoose.Schema.Types.Mixed,
            default: {},
        },
    },
    {
        timestamps: true,
    }
);

// TTL index - auto-delete logs older than 30 days
activityLogSchema.index({ createdAt: 1 }, { expireAfterSeconds: 30 * 24 * 60 * 60 });

const ActivityLog =
    mongoose.models.ActivityLog ||
    mongoose.model("ActivityLog", activityLogSchema);

export default ActivityLog;
