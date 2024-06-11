import dotenv from 'dotenv';
dotenv.config({path: "./config/config.env"});

import app from './app.js';

const poolDB = require("./db");


// const connectDatabase = require("./config/database");

// Handle Uncaught Exceptions
process.on("uncaughtException", err => {
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server due to Uncaught Exception");
    process.exit(1);
})


// Start the server
const port = process.env.PORT || 8000;

// Connect to database
// connectDatabase();


// Initial Routes

app.get("/", (req, res) => {
    res.status(201).send({msg: "Success", data: "API is running"});
})


process.on("unhandledRejection", (err: any) => {
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server due to Unhandled Promise Rejection");
    server.close(() => {
        process.exit(1);
    });
})

// GET Operation
app.get("/api/get", async (req, res) => {
    try {
        const users = await poolDB.query("SELECT * from grenud_lms.users");
        res.status(200).json(users);
    } 
    catch (error) {
        console.error(error.message)
    }
    
});

// LISTENER
const server = app.listen(port, () => {
    console.log(`server started at http://127.0.0.1:${port}`);
})