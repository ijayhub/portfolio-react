import React from 'react';
import code from '../img/code.svg'



const Hero = () => {
	
  return (
		<div>
			<header className='bg-hero'>
				<div className='row '>
					<div className='col-sm-6 col-md-12 col-lg-6 text-center text-white tracking-in-expand '>
						<div className=''>
							<p className='display-6 hero-text'>
								Hi<span> I'm</span>
							</p>
							<h1 className='display-1 fw-bold text-warning'>Ijeoma Igboagu</h1>
							<h2 className='lh-lg'>A frontend developer</h2>
							<p className='lh-lg'>Building websites is what i do</p>
							<a href='#contact'>
								<button className='btn-primary p-3 rounded-pill border-0 shadow'>
									Get in touch
								</button>
							</a>
						</div>
					</div>
					<div className='col-md-6 code'>
						<img src={code} alt='coder' />
					</div>
				</div>
			</header>
		</div>
	);
}

export default Hero
