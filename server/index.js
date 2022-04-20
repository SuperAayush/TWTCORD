import express from "express";
import connection from "./database/DB.js";
import Router from "./Routes/Routes.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { Server } from 'socket.io'; 

const app = express();

dotenv.config({path:'./.env'});

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

const URL = process.env.AZURE_URL;

const PORT =process.env.PORT || 8000;

app.use("/", Router);


const server = app.listen(PORT, () =>
  console.log(`Server started on ${PORT}`)
);

// Socket setup
const io = new Server(server, { cors: { origin: '*' } });
io.on('connection', (socket) => {
  console.log('Connection established');
});

  
connection(URL);
