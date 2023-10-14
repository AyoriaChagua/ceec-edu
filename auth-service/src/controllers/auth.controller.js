import { validateFields } from "../utils/validateFields.js";
import { authService } from "../services/auth.service.js";

export const authUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const result = await authService({ email, password });

        if (result.code === 401)
            return res.status(401).json({ msg: result.msg });

        const errorFields = validateFields(req);

        if (errorFields)
            return res.status(400).json(validateFields);

        return res.status(200).json({ token: result.token })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server internal error' });
    }
}