import express from "express";
import connection from "./database/DB.js";
import Router from "./Routes/Routes.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

const socket = require("socket.io");
const app = express();

dotenv.config({ path: "./.env" });

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

const URL = process.env.AZURE_URL;

const PORT =process.env.PORT || 8000;

app.use("/", Router);

const server = app.listen(process.env.PORT, () =>
  console.log(`Server started on ${process.env.PORT}`)
);

// Socket setup
const io = socket(server, {
    cors: {
      origin: "http://localhost:3000",
      credentials: true,
    },
  });
  
connection(URL);
