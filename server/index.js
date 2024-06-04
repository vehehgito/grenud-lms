import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';

dotenv.config(
    {
        path: './config/config.env'
    }
);
const app = express();

const server_port = process.env.PORT || 4000;
const client_url = process.env.CLIENT_URL;

// MIDDLEWARE
const corsOptions = {
    credentials: true,
    origin: client_url,
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));



// Test Msg
app.get("/", (req, res) => {
    res.status(200).json({msg: "Hello World"});
});


// Start Server
app.listen(server_port, () => {
    console.log(`Server is running on port http://localhost:${server_port}/`);
});