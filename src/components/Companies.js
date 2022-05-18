import React from 'react'

import faang from '../img/faang.jpg';
import microsoft from '../img/microsoft.jpg';

const Companies = () => {
    return (
			<div>
				<div className='container'>
					<div className='row'>
						<div className='col-md-6'>
							<img
								src={faang}
								alt='company-logo'
								className='img-fluid mt-4 company-logo'
							/>
						</div>
						<div className='col-md-6'>
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
