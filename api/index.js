import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.router.js';
import authRouter from './routes/auth.route.js';
import { error } from 'console';
dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("mongodb connected");
}).catch ((err) => {
  console.log(err);
});

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log('server is running on port 3000');  
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message
  });
});