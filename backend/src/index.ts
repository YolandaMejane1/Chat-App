import express from "express"
import authRoutes from "./routes/auth.route";
import messageRoutes from "./routes/message.route"

import dotenv from 'dotenv';
dotenv.config();

const app = express()

app.use(express.json());

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)


app.listen(5004, () => {
    console.log("Server is running on port 5004")
})