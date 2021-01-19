import mongoose from "mongoose";
import colors from 'colors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
//import data
import user from './data/user.js';
import product from './data/products.js';
//start .env
dotenv.config();
//start DB
connectDB();

//@import DATA function
const importData = async () => {
    try {
        //Delete all data that exist in destination models
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();

        //import User
        const userData = await User.insertMany(user);
        //find admin identification admin._id
        const adminIdent = userData[0]._id;
        //set user in Product model as adminIdentification => can allow to import to database
        const productData = product.map(el => {
            return {...el, user: adminIdent}
        });
        //import Product
        await Product.insertMany(productData);
        //display if success
        console.log("Insert Success".blue.inverse);
        //exit the execute state
        process.exit();
        
    } catch (error) {
        console.error(`Error: ${error.message}`.red.inverse);
        process.exit(1);
    }
}

//@Warning: can destroy all data inside database.
//CAREFUL!!!!
const destroyData = async () => {
    try {
        //Delete all data that exist in destination models
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();

        //display if success
        console.log("Data Destroy".red.inverse);
        process.exit();
        
    } catch (error) {
        console.error(`Error: ${error.message}`.red.bold);
        process.exit(1);
    }
}
//process.argv contain command as arr node[0] backend/seeder[1] -d[2] 
//check if element idx = 2 to run destroy function
if(process.argv[2] == '-d'){
    destroyData();
}   else {
    importData();
}
