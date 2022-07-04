import React from 'react'

import react from '../img/react.png';
import sass from '../img/sass.svg';
import bootstrap from '../img/bootstrap.jpg';
import tailwind from '../img/tailwind.png';
import next from '../img/next.png'
import git from '../img/git.png';

const Frameworks = () => {
    return (
			<div id='skills'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-3'>
							<div className='d-flex align-items-center justify-content-between shadow-lg p-4 bg-white rounded-pill mb-3 '>
								<img src={react} alt='react' width='100px' height='100px' />
								<p className='fw-bold h2'>REACT</p>
							</div>
						</div>
						<div className='col-md-3'>
							<div className='d-flex align-items-center justify-content-between shadow-lg p-4 bg-white rounded-pill mb-3 '>
								<img src={sass} alt='sass' width='100px' height='100px' />
								<p className='fw-bold h2'>SASS</p>
							</div>
						</div>
						<div className='col-md-3'>
							<div className='d-flex align-items-center justify-content-between shadow-lg p-4 bg-white rounded-pill mb-3'>
								<img
									src={bootstrap}
									alt='bootstrap'
									width='100px'
									height='100px'
								/>
								<p className='fw-bold h4'>BOOTSTRAP</p>
							</div>
						</div>
						<div className='col-md-3'>
							<div className='d-flex align-items-center justify-content-between shadow-lg p-4 bg-white rounded-pill mb-3 '>
								<img
									src={tailwind}
									alt='tailwind'
									width='100px'
									height='100px'
								/>
								<p className='fw-bold h4'>TAILWIND</p>
							</div>
						</div>
						<div className='col-md-3'>
							<div className='d-flex align-items-center justify-content-between shadow-lg p-4 bg-white rounded-pill mb-3 '>
								<img src={next} alt='next' width='100px' height='100px' />
								<p className='fw-bold h2'>NEXT</p>
							</div>
						</div>
						<div className='col-md-3'>
							<div className='d-flex align-items-center justify-content-between shadow-lg p-4 bg-white rounded-pill mb-3 '>
								<img
									src={git}
									alt='git'
									width='100px'
									height='100px'
								/>
								<p className='fw-bold h2'>GIT</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
}

export default Frameworks
