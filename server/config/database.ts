import pg from "pg";
import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" });

// const {DATABASE_URI} = process.env;
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

const { Pool } = pg;

const pool = new Pool({
    user: PGUSER,
    host: PGHOST,
    database: PGDATABASE,
    password: PGPASSWORD,
    port: 5432,
    ssl: {
        rejectUnauthorized: false,
    },
});




export default pool;
