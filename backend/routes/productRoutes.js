import express from 'express';
import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';
const route = express.Router();

//@Route: GET ROUTE '/api/products/'
//@Description:GET all products inside database
//@Access: Public
route.get('/', asyncHandler(async (req,res) => {
    const products = await Product.find();
    
    res.json(products);
    
}));

//@Route: GET ROUTE '/api/products/:id'
//@Description:GET product by id
//@Access: Public
route.get('/:id', asyncHandler(async (req,res) => {
    const product = await Product.findOne({ _id : req.params.id });
    if(product){
        return res.json(product);
    } else {
        res.status(404);
        throw new Error('Product Not Found');
    }
    
    
}));

export default route;