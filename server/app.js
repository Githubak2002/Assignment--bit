import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan';
import colors from 'colors';
import mongoose from 'mongoose';
import path from 'path';

// dotenv
dotenv.config();

// route import
import userRouter from './routes/userRoutes.js';

const __dirname = path.resolve();
const app = express();

// middlewares
app.use(express.json());
app.use(morgan('dev'));
// app.use(cors());

// routes
app.use('/api/v1/user',userRouter);

const port = process.env.PORT || 8080;
const baseURL = process.env.BASE_URL;

// DB connection and app lisening 
app.listen(port,() => {
  console.log(`Server started at ${baseURL}`.bgCyan.white)
})

const db = await mongoose.connect(process.env.MONGODB_URL);
try{
  if(db){
      console.log(`Connected to DB`.bgMagenta.white);
      }
}
catch(err){
    console.log("Error in connection of DB", err);
}

