import React from 'react'
import { Card } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, ListGroup, Image } from 'react-bootstrap'
import products from '../products'
import Rating from "../components/Rating"

function ProductScreen(match) {
    const { id } = useParams();
    const product = products.find((p)=>p._id=== id);
  return (
    <div>
      <Link to='/' ClassName='btn btn-light my-3'>Go Back</Link>
      <Row>
        <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
            <ListGroup variant="flush">
               
                <ListGroup.Item>
                    <h3> {product.name}</h3>
                </ListGroup.Item>

                <ListGroup.Item>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'yellow'}/>
                </ListGroup.Item>
                <ListGroup.Item>
                    Price: ${product.price}
                </ListGroup.Item>
                <ListGroup.Item>
                    Description : {product.description}
                </ListGroup.Item>
                
            </ListGroup>
        </Col>

        <Col md={3}>
            <ListGroup virant='flush'>
                <ListGroup.Item>
                    <Row>
                        <Col> Price:</Col>
                        <Col><strong>${product.price}</strong></Col>
                    </Row>
                </ListGroup.Item>   
                    
            
            </ListGroup>

        </Col>
      </Row>
    </div>
  )
}

export default ProductScreen
