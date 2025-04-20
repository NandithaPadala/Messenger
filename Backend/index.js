import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import userRoute from './route/user.route.js';
const app = express();
dotenv.config();
app.use(express.json());

app.use(userRoute)

const PORT =  process.env.PORT || 5001;
const URI = process.env.MONGODB_URI;

try{
    mongoose.connect(URI);
    console.log('MongoDB connected successfully');
}catch(err){
    console.error('MongoDB connection error:', err);
}


app.use("/user", userRoute);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});