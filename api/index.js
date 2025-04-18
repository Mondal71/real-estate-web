import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.router.js';
import authRouter from './routes/auth.route.js';
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