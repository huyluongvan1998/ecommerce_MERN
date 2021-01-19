import React, { useState, useEffect } from 'react'
import { Row, Col } from "react-bootstrap";
import Product from '../Components/Product';
import axios from "axios";

const HomeScreen = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const res = await axios.get('/api/products');

        return setProducts(res.data);
    }

    useEffect(()=> {
        fetchProducts();
    },[])
    return (
        <>
            <h1>Latest Product</h1>
            <Row >
                    {
                        products.map(product => (
                            <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                                <Product  product={product} />
                            </Col>
                        ))
                    }
            </Row>
        </>
    )
}

export default HomeScreen
