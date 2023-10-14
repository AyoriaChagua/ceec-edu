import app from "./app.js";
import { PORT } from "./config/env.js";
import sequelize from "./config/db.js";

async function main() {
    try {
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server running in http://localhost:${PORT}/api/auth 👌`));
    } catch (error) {
        console.log("We have a error", error)
    }
}

main();

