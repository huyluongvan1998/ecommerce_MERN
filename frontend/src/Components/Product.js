import React from 'react'
import { Card, Button } from "react-bootstrap";

const Product = ({ product }) => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <a href={`/product/${product._id}`}>
                    <Card.Img variant="top" src={product.image} />
                </a>
                <Card.Body>
                    <Card.Title>
                        {product.name}
                    </Card.Title>
                    <Card.Text>
                    {`${product.rating} and ${product.numReviews}`}
                    </Card.Text>
                    <Card.Text as='h3'>
                        {product.description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>  
        </>
    )
}

export default Product
