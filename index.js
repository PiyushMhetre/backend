import express from 'express'
import { dbconnect } from './config/database.js';
import dotenv from 'dotenv'
dotenv.config();
import cors from 'cors'

const app = express();
dbconnect();

//middleware to parse json request body 
app.use(express.json());

import todoRouter from './routes/todos.js';


app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these methods
//   allowedHeaders: ['Content-Type', 'Authorization'], // Allow these headers
}));
app.use("/api/v1", todoRouter); 



app.listen(4000, () => {
    console.log("server started successfully")
});

 