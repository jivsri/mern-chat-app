import express from "express";
import {loginController,signupController,logoutController} from "../controllers/authController.js";
import { isAuthenticated } from "../utils/isAuthenticated.js";

const router=express.Router();


router.post("/signup",signupController);

router.post("/login",loginController);

router.get("/logout",isAuthenticated,logoutController);



export default router;