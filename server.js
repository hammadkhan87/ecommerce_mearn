import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoute from "./routes/CategoryRoute.js";
import productRoute from "./routes/productRoute.js";
import path from "path";
import cors from "cors";

import {fileURLToPath} from "url";
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
//configure env
dotenv.config();
//data base config
connectDB();

//rest object
const app = express();
//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "./client/build")));
//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/product", productRoute);

//rest api
// app.get("/",(req,res)=>{
// res.send("<h1>welcome to e commernce app    </h1>")
// })
app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//port
const PORT = process.env.PORT || 8080;

//run or lisn app
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mood on ${PORT}`.bgCyan.white
  );
});
