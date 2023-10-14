import express from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./routes/auth.route.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/api/auth", router);

export default app;
