import express from "express";
import connection from "./database/DB.js";
import Router from "./Routes/Routes.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";
const app = express();

dotenv.config();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

const URL = process.env.AZURE_URL;

const PORT = 8000;

app.use("/", Router);

app.listen(PORT, () => console.log("Server is running"));

connection(URL);
