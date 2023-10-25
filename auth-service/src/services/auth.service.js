import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../config/env.js";
import User from "../models/User.js"
import { handleFailedLoginAttempt, resetFailedLoginAttempts } from "../utils/limitAttempts.js";

export const authService = async ({ email, password }) => {
    try {
        const userFound = await User.findOne({ where: { email } });
        if (!userFound)
            return { code: 401, msg: "Usuario ó Contraseña inválida" }

        if (userFound.is_blocked) {
            return res.status(401).json({ msg: 'Cuenta bloqueada' });
        }

        const matchPassword = await User.comparePassword(
            password,
            userFound.password
        );

        if (!matchPassword) {
            await handleFailedLoginAttempt(userFound);
            let attemptsRestant = 5 - userFound.failed_login_attempts 
            return { code: 401, msg: "Usuario ó Contraseña inválida", possibleAttemps: attemptsRestant}
        }

        await resetFailedLoginAttempts(userFound)

        const token = jwt.sign(
            { id: userFound.user_id },
            JWT_SECRET,
            { expiresIn: '72h' }
        );
    
        return { token }

    } catch (error) {
        console.log(error)
    }
}