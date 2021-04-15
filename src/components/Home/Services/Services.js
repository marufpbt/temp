import React, { useState } from 'react';
import './Service.css';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Services = () => {
	const [services, setServices] = useState([]);
	fetch('https://whispering-stream-20843.herokuapp.com/services')
	.then(res => res.json())
	.then(data => setServices(data))
	return (
		<section className="container-fluid service-container my-5 py-5" style={{ color: '#F8F8F8', minHeight: '500px' }}>
			<div className="row text-center">
				<div className="col-12">
					<h6 className="section-sub-title mb-20">OUR SERVICES</h6>
					<h3 className="heading">For your very specific industry, <br /> we have <span className="text-primary">highly-tailored IT solutions.</span></h3>
				</div>
			</div>
			<div className="d-flex justify-content-center">
				<div className="row w-75">
					{services.map(service => <ServiceDetail service={service}></ServiceDetail>)}
				</div>
			</div>
		</section>
	);
};

export default Services;
