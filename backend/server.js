import dotenv from "dotenv";
import express from "express";
dotenv.config();

import { connectionDB } from "./db/connectionDB.js";
import authRoute from './routes/auth.route.js';

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());  // allow to parse json data


app.get("/", (req, res) => {
    res.send("Server is ready");
})

app.use("/api/auth", authRoute);

app.listen(PORT, () => {
    connectionDB();
    console.log(`Server started on http://localhost:${PORT}`);
})