import jwt, { decode } from "jsonwebtoken";
import { User } from "../models/userModel.js";
export const isAuthenticated = async (req, res, next) => {
    try {
        const { token } = req.cookies;
        if (!token) {
            return res.status(404).json({
                success: false,
                message: "User not logged in",
            });
        }
        let decoded = jwt.decode(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(404).json({
                success: false,
                message: "Unauthorised User",
            });
        }

        const user = await User.findById(decoded.id).select("-password");
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Unauthorised User",
            });
        }


        req.user = user;
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error authenticate",
        });
    }
}