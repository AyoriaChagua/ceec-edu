import bcrypt from 'bcrypt'

export const encryptPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        console.log(hash)
        return hash;
    } catch (error) {
        console.log(error);
    }
}

