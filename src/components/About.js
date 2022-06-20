import React from 'react'

import { useState } from 'react'

const About = () => {
	const [hire, setHire] = useState('Hire');
	const handleClick = () => {
		setHire('Download Resume');
	};
    return (
			<div className='bg-primary pb-5 ' id='about'>
				<div className='m-5'>
					<h3 className='fw-bold text-center display-5  text-white'>
						About me
					</h3>
					<div className='row about'>
						<div className='col-md-12 container text-white '>
							<p className='lh-lg about-text slide text-center'>
								Hi, I'm Ijeoma, a front-end developer... supportive, reliable,
								your information is secured, patient, and observant. I come from
								a non-tech background, passionate about Web Development and want
								to build a career in tech. My collaborative skills have helped
								me deliver well in my projects. Being diligent, I'm open to
								contract jobs and collaboration projects. You can always reach
								out to me.
							</p>
						</div>

						<div className='d-flex justify-content-center'>
							<a
								href='https://drive.google.com/file/d/1LWd-2j4dFuD082A-yvnc78tJWk3GpkSo/view?usp=sharing'
								target=' _blank'>
								<button
									className='border-0 p-3 rounded-2 mb-4 hero-hover slide-in-bottom'
									onClick={handleClick}>
									{hire}
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		);
}

export default About
