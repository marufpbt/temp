import React from 'react';
import './BrandInfo.css';
import b1 from '../../../images/brand-logo-1.png';
import b2 from '../../../images/brand-logo-2.png';
import b3 from '../../../images/brand-logo-3.png';
import b4 from '../../../images/brand-logo-4.png';
const BrandInfo = () => {
	return (
		<section className="container-fluid d-flex justify-content-center align-items-center" style={{height: '200px'}} >
			<div className="brand-info row w-75">
				<div className="col-md-3 col-6 mt-4 mt-md-0">
					<img src={b1} className="img-fluid" alt="" />
				</div>
				<div className="col-md-3 col-6 mt-4 mt-md-0">
					<img src={b2} className="img-fluid" alt="" />
				</div>
				<div className="col-md-3 col-6 mt-4 mt-md-0">
					<img src={b3} className="img-fluid" alt="" />
				</div>
				<div className="col-md-3 col-6 mt-4 mt-md-0">
					<img src={b4} className="img-fluid" alt="" />
				</div>
			</div>
		</section>
	);
};

export default BrandInfo;
