import express from 'express'
import { dbconnect } from './config/database.js';
import dotenv from 'dotenv'
dotenv.config();
import cors from 'cors'
import path from 'path'
const app = express();
dbconnect();

// const __dirname = path.resolve();
// app.use(express.static(path.join(__dirname, '../frontend/build')));
// middleware to parse json request body 
app.use(express.json());

import todoRouter from './routes/todos.js';


app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these methods
//   allowedHeaders: ['Content-Type', 'Authorization'], // Allow these headers
}));
app.use("/api/v1", todoRouter); 

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });



app.listen(4000, () => {
    console.log("server started successfully")  
});

 