import React from 'react'
import google from '../img/google2.0.0.jpg';
import faang from '../img/faang.jpg';
import microsoft from '../img/microsoft.jpg';

const Companies = () => {
    return (
			<div>
				<div className='container'>
					<div className='row'>
						<div className='col-md-4'>
							<img
								src={google}
								alt=' company-logo'
								className='img-fluid company-logo  '
							/>
						</div>
						<div className='col-md-4'>
							<img
								src={faang}
								alt='company-logo'
								className='img-fluid mt-4 company-logo'
							/>
						</div>
						<div className='col-md-4'>
							<img
								src={microsoft}
								alt='company-logo'
								className='img-fluid mt-4 company-logo'
							/>
						</div>
					</div>
				</div>
			</div>
		);
}

export default Companies
