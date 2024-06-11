import dotenv from 'dotenv';
dotenv.config({path: "./config/config.env"});

import app from './app.js';


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


const server = app.listen(port, () => {
    console.log(`server started at http://127.0.0.1:${port}`);
})

process.on("unhandledRejection", (err: any) => {
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server due to Unhandled Promise Rejection");
    server.close(() => {
        process.exit(1);
    });
})

import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { users } from "./config/db/schema.js";

const pool = new Pool({
  connectionString: process.env.DB_URL,
});

const db = drizzle(pool);
// userid : uuid, name : varchar(255), email : varchar(255), passwordhash varchar(255), user_role varchar(255), created_on timestamp, courses_enrolled : ??
await db.insert(users).values({ name: "John Doe", email: "johndoe@gmail.com", password_hash: "password", user_role: "student" });
