import dotenv from 'dotenv';
dotenv.config({path: "./config/config.env"});

import app from './app.js'


// const connectDatabase = require("./config/database");

// Handle Uncaught Exceptions
process.on("uncaughtException", err => {
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server due to Uncaught Exception");
    process.exit(1);
})


// Start the server
const port = process.env.PORT || 5000;

// Connect to database
// connectDatabase();


// Initial Routes

app.get("/", (req, res) => {
    res.send("API is running");
})


const server = app.listen(port, () => {
    console.log(`server started at http://127.0.0.1:${port}`);
})

process.on("unhandledRejection", err => {
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server due to Unhandled Promise Rejection");
    server.close(() => {
        process.exit(1);
    });
})