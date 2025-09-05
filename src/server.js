import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import pathRouter from "./routes/path.js"
import connectDB from "./config/db.js";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("hello ")
})

app.use("/api/hey",pathRouter)
app.listen(PORT, () => {
    connectDB()
    console.log(`Server is running on ${PORT} PORT`);
    
})