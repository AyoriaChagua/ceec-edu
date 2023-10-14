import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Role = sequelize.define('roles', {
    role_id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING
    }
});

export default Role;