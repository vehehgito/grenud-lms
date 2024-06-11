const {Pool} = require("pg")
const dotenv = require("dotenv");

dotenv.config({path: "./config/config.env"});

const DB_URI = process.env.DB_URL;

const poolDB = new Pool({
    connectionString: DB_URI,
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = poolDB;