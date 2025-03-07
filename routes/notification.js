import express from "express";
import {
  getUnreadNotifications,
  markAllAsRead,
} from "../controllers/notification.js";
import { authenticateOwner } from "../middlewares/authenticate.js"; // Middleware for authentication

const router = express.Router();

// Get unread notifications for a specific shop
router.get("/:shopId",  getUnreadNotifications);

// Mark all notifications as read for a shop
router.put("/mark-all-read/:shopId",  markAllAsRead);

export default router;
