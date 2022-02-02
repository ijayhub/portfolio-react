import React from 'react'
import web from '../img/web dev.jpg';


const Service = () => {
    return (
			<div className='bg-light p-5'>
				<div className='container'>
					<div className='row mt-3'>
						<div className='col-md-6 p-5 slide'>
							<h3 className='display-4 text-center fw-bold'>Service</h3>
							<p className='text-muted'>
								I use technological tools to create websites that are
								attractive, functional and mobile responsive.
							</p>
						</div>
						<div className='col-md-6 slide'>
							<img
								src={web}
								alt='web'
								className='img-fluid rounded-3'
							/>
						</div>
					</div>
				</div>
			</div>
		);
}

export default Service
