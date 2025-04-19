import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
const app = express();
dotenv.config();



const PORT =  process.env.PORT || 5001;
const URI = process.env.MONGODB_URI;

try{
    mongoose.connect(URI);
    console.log('MongoDB connected successfully');
}catch(err){
    console.error('MongoDB connection error:', err);    
}


app.get('/',(req,res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})