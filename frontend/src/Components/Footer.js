import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
const Footer = () => {
    return (
            <footer>
                <Container>
                    <Row>
                        <Col>
                            <div className='text-center py-3'>
                                Copyright &copy; By Jack
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
    )
}

export default Footer
