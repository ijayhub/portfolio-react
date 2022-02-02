import { Carousel } from 'react-bootstrap';
import React from 'react'

import html from '../img/html.png'
import css from '../img/css2.png'
import js from '../img/Js.png'
import git from '../img/git.png'


const Skills = () => {
    return (
			<div className='bg-hero overflow-hidden ' id='skills'>
				<div className='container'>
					<h3 className='display-3 text-center my-5 text-white fw-bold'>
						My Skills
					</h3>
					<Carousel>
						<Carousel.Item>
							<img className='d-block w-25 h-25' src={html} alt='First slide' />
						</Carousel.Item>
						<Carousel.Item>
							<img className='d-block w-25 h-25' src={css} alt='Second slide' />
						</Carousel.Item>
						<Carousel.Item>
							<img className='d-block w-25 h-25' src={js} alt='Third slide' />
						</Carousel.Item>
						<Carousel.Item>
							<img className='d-block w-25 h-25' src={git} alt='fourth slide' />
						</Carousel.Item>
					</Carousel>
				</div>
			</div>
		);
}

export default Skills
