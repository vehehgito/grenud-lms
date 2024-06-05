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

// Route Imports
// const user = require("./routes/userRoute");

// Middleware Imports
// const errorMiddleware = require("./middleware/error");


// Mount Routes
// app.use("/api/v1", user);

// Middleware for Errors
// app.use(errorMiddleware);



export default app;