import { validationResult } from "express-validator";

export const validateFields = (req) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) 
            return { errors: errors.array()}
        return null;
    } catch (error) {
        console.log(error);
        return { error: error}
    }
}