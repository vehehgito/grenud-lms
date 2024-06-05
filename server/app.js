import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// Configuration
const app = express();
const corsOption = {
    credentials: true,
    origin: process.env.CLIENT_URL,
}
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}))
app.use(cors(corsOption));



// Middleware Imports
// const errorMiddleware = require("./middleware/error");

// Database Connection
import pool from "./config/database.js";

pool.connect()
.then(() => {
    console.log("Database connected successfully");
})



// Route Imports
import userRouter from './src/routes/userRoutes.js';


// Mount Routes
app.use("/api/v1", userRouter);

// Middleware for Errors
// app.use(errorMiddleware);



export default app;