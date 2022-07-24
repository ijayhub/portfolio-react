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
								Hello, my name is Ijeoma, and I'm a front-end developer. I'm
								supportive, dependable, patient, observant, and your information
								is secure. Cooking, listening to music, and watching comedies
								are some of my non-tech interests. My collaborative abilities
								have assisted me in completing my projects successfully. I
								believe that everyone should have access to education, have a
								skill be employable and I believe that this can be accomplished
								through technology.You are always welcome to contact me.
							</p>
						</div>

						<div className='d-flex justify-content-center'>
							<a
								href='https://drive.google.com/file/d/1PwRc_LA-4gwly4EJBGtpgcJkX5lfjwMb/view?usp=sharing'
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
