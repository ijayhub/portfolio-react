import React from 'react'

import { useState } from 'react'

const About = () => {
	const [hire, setHire] = useState('Hire');
	const handleClick = () => {
		setHire('Download Resume');
	};
    return (
			<div className='bg-primary p2-5' id='about-me'>
				<div>
					<h3 className='fw-bold text-center display-5 pt-2 text-white'>
						About me
					</h3>
					<div className='row about'>
						<div className='col-md-6 container text-white '>
							<p className='lh-lg about-text slide text-center '>
								I'm a front-end developer by the name of Ijeoma. I'm
								understanding, dependable, patient, perceptive, and your
								information is safe with me. Some of my non-technical interests
								include cooking, listening to music, and watching comedies. I've
								been able to effectively complete my assignments and I
								collaborate with others. Everyone should have access to
								education and the ability to find employment, and i believe with
								technology can make this possible. You can always contact me.
							</p>
						</div>

						<div className='d-flex justify-content-center'>
							<a
								href='https://drive.google.com/file/d/1s6UUFRawzLK9YZ_QRhbZmCs82NmOWQ1D/view?usp=share_link'
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
