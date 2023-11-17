import express from "express";
import "dotenv/config";
import { router } from "./routes/routes.js";

const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.json({ extended: false }));

app.use("/api", router);

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
