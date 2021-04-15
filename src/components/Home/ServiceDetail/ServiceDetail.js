import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const ServiceDetail = ({ service }) => {
	const { imageUrl, title, description, price, _id } = service;
	const history = useHistory();
	const handleBuyService = (id) => {
		const service = `/service/${id}`
		history.push(service)
	}
	return (
		<Card style={{ width: '18rem', height: 'fitContent' }}>
			<Card.Img variant="top" src={imageUrl} />
			<Card.Body>
				<Card.Title>{title} </Card.Title>
				<p className="priceStyle">${price}</p>
				<p>{description}</p>
				<Button variant="success" className="float-right" onClick={() => handleBuyService(_id)}>Buy Now</Button>
			</Card.Body>
		</Card>
	);
};

export default ServiceDetail;
