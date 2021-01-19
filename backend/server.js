import express from 'express';
//remember to include .js at the file extension to use ES module
import productRoute from './routes/productRoutes.js';
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import colors from "colors";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
//@ Environment Variable (as same as config)
//gitignore .env due to sensitive information (secret token, db pass)
dotenv.config();


const app = express();


connectDB();

app.get('/', (req, res)=> {
    res.send('hello');
})

//fetch all items from data file
app.use('/api/products', productRoute);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server start in ${process.env.NODE_ENV} mode on PORT ${PORT}`.bold.yellow.underline);
})