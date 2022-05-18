import React from 'react'
import { Carousel } from 'react-bootstrap';
import react from '../img/react.png';
import sass from '../img/sass.svg';
import bootstrap from '../img/bootstrap.jpg';
import tailwind from '../img/tailwind.png';

const Frameworks = () => {
    return (
			<div className='bg-hero' id='skills'>
				<div className='container'>
					<h3 className='display-3 text-center mb-3 text-white fw-bold'>
						Frameworks
					</h3>
					<Carousel>
						<Carousel.Item>
							<img
								className='d-block w-25 h-25'
								src={react}
								alt='First slide'
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className='d-block w-25 h-25'
								src={sass}
								alt='Second slide'
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className='d-block w-25 h-25'
								src={bootstrap}
								alt='Third slide'
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className='d-block w-25 h-25'
								src={tailwind}
								alt='fouth slide'
							/>
						</Carousel.Item>
					</Carousel>
				</div>
			</div>
		);
}

export default Frameworks
