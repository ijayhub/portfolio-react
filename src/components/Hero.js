import React from 'react';



const Hero = () => {
	
  return (
		<div>
			<header className='bg-hero'>
				<div className='row '>
					<div className='col text-center text-white tracking-in-expand '>
						<div>
							<p className='display-6 hero-text'>
								Hello there 👋! <span> I'm</span>
							</p>
							<h1 className='display-2 fw-bold'>Ijeoma Igboagu</h1>
							<h2 className='lh-lg'>A frontend developer</h2>
							<p className='lh-lg'>Building websites is what i do</p>
							<a href='#contact'>
								<button className='bg-btn btn-primary p-4 rounded-pill border-0 shadow mb-5'>
									Get in touch
								</button>
							</a>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
}

export default Hero
