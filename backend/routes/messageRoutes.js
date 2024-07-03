import express from "express";
import { sendMessage,getMessage } from "../controllers/messageController.js";
import { isAuthenticated } from "../utils/isAuthenticated.js";
const router=express.Router();

router.get("/:id",isAuthenticated,getMessage);
router.post("/send/:id",isAuthenticated,sendMessage);







export default router;