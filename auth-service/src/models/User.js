import { DataTypes } from 'sequelize';
import sequelize from "../config/db.js";
import bcrypt from 'bcrypt'

const User = sequelize.define('users', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey : true,
    },
    email: {
        type:DataTypes.STRING,

    },
    password: {
        type: DataTypes.STRING
    },
    role_id: {
        type: DataTypes.INTEGER
    },
    failed_login_attempts: {
        type: DataTypes.INTEGER,
    },
    last_failed_login: {
        type: DataTypes.DATE
    },
    is_blocked: {
        type: DataTypes.BOOLEAN
    }
},{
    sequelize,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});


User.comparePassword = async (password, hashedPassword) => {
    const isMatch =  await bcrypt.compare(password, hashedPassword);
    return isMatch
}

export default User;