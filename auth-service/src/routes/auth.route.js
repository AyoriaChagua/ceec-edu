import { Router } from "express";
import { body } from "express-validator";
import * as authController from "../controllers/auth.controller.js";

const router = Router();

router.post("/signin", [
        body('email').isEmail(),
        body('password').isLength({min: 6})
    ],authController.authUser);

export default router;