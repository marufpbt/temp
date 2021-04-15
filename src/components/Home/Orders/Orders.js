import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import Sidebar from './../../Admin/Sidebar/Sidebar';

const Orders = () => {
	const [orders, setOrders] = useState([])
	fetch('https://whispering-stream-20843.herokuapp.com/orders')
		.then(res => res.json())
		.then(data => {
			setOrders(data)
		}, [])
	return (
		<section className="container-fluid row">
			<Sidebar></Sidebar>
			<div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
				<h5 className="text-brand">Orders</h5>
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>Name</th>
							<th>Email</th>
							<th>Service</th>
							<th>Price</th>
							<th>Pay With</th>
							<th>Status</th>
						</tr>
					</thead>
					{orders.map(order => <tbody>
						<tr>
							<td>{order.name}</td>
							<td>{order.email}</td>
							<td>{order.title}</td>
							<td>${order.price}</td>
							<td>Paypal</td>
							<td>Pending</td>
						</tr>
					</tbody>)}
				</Table>
			</div>
		</section>
	);
};

export default Orders;
