import express from "express";
import connection from "./database/DB.js";
import Router from "./Routes/Routes.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
const app = express();


dotenv.config({path:'./.env'});

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

const URL = process.env.AZURE_URL;

const PORT=process.env.PORT;

app.use("/", Router);

app.listen(PORT, ()=> {
    console.log(`server is running at port ${PORT}`);
})

connection(URL);
