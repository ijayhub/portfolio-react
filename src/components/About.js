import React from 'react'
import Ijay from '../img/Ijeoma.png'
import { useState } from 'react'

const About = () => {
	const [hire, setHire] = useState('Hire');
	const handleClick = () => {
		setHire('Download Resume');
	};
    return (
			<div className='bg-primary pb-5 ' id='about'>
				<div className='container'>
					<div className='row about'>
						<div className='col-md-6 text-white '>
							<h3 className='fs-2 about-text'>About me</h3>
							<p className='lh-lg slide'>
								Hi, I'm Ijeoma a self-taught front-end developer....supportive,
								reliable your information is secured,patient,observant. I come
								from a non-tech background but am passionate about web
								development(frontend) and want to build a career in tech, am
								going through online courses to improve my self and growth.I'm
								passionate about leveraging my skills to give users an amazing
								client-side experience. My collaborative skill has helped me
								deliver well in my projects. Being diligent i'm open to Contract
								jobs and Collaboration projects. You can always reach out to me.
							</p>
						</div>
						<div className='col-md-6 about-img'>
							<img
								src={Ijay}
								alt='ijay-img'
								className='img-fluid about2-img pt-5 d-none d-md-block d-lg-block slide '
							/>
						</div>
						<a href='https://drive.google.com/drive/my-drive' target=' _blank'>
							<button
								className='border-0 p-3 rounded-2 mb-4 hero-hover'
								onClick={handleClick}>
								{hire}
							</button>
						</a>
					</div>
				</div>
			</div>
		);
}

export default About