import React from 'react'
import { Image, ListGroup, Button, Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from '../Components/Rating';
import products from '../products';

const ProductScreen = ({match}) => {
    const product = products.find(product => product._id === match.params.id);

    return (
        <>
            <Link to='/' className='btn btn-light my-3'>Go Back</Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} rounded fluid/>
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush' >
                        <ListGroup.Item>
                            <h3>
                                {product.name}
                            </h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating 
                                value={product.rating} 
                                text={`${product.numReviews} reviews`} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <span>
                            Price:{' '} ${product.price}
                            </span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <span>
                                {product.description}
                            </span>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <ListGroup>
                        <ListGroup.Item>
                            <Row>
                                <Col>Price:</Col>
                                <Col> ${ product.price } </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Status:</Col>
                                <Col> 
                                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                           <Button  className='btn-block'
                                    type='button'
                                    disabled={product.countInStock === 0 ? true : false}>
                               ADD TO CART
                           </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </>
    )
}

export default ProductScreen
