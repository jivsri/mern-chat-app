import express from "express";
import { getUsersForSidebar } from "../controllers/userController.js";
import { isAuthenticated } from "../utils/isAuthenticated.js";
const router=express.Router();


router.get("/",isAuthenticated,getUsersForSidebar);











export default router;