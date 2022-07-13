
import React from 'react'

import html from '../img/html.png'
import css from '../img/css.png'
import js from '../img/Js.png'
// import svelte from '../img/svelte.png'
import react from '../img/react.png';





const Skills = () => {
    return (
			<div id='skills'>
				<div className='container mt-5'>
					<h2 className='text-center display-4 fw-bolder text-warning mb-3'>
						SKILLS
					</h2>
					<div className='row'>
						<div className='col-md-3 '>
							<div className='d-flex align-items-center justify-content-between shadow-lg p-4 bg-white rounded-pill mb-3 '>
								<img src={html} alt='html' width='100px' height='100px' />
								<p className='fw-bold h2'>HTML5</p>
							</div>
						</div>
						<div className='col-md-3'>
							<div className='d-flex align-items-center justify-content-between shadow-lg p-4 bg-white rounded-pill  mb-3 '>
								<img src={css} alt='css' width='100px' height='100px' />
								<p className='fw-bold h2'>CSS3</p>
							</div>
						</div>
						<div className='col-md-3'>
							<div className='d-flex align-items-center justify-content-between shadow-lg p-4 bg-white rounded-pill  mb-3 '>
								<img src={js} alt='js' width='100px' height='100px' />
								<p className='fw-bold h2'>javascript</p>
							</div>
						</div>

						{/* <div className='col-md-3'>
							<div className='d-flex align-items-center justify-content-between shadow-lg p-4 bg-white rounded-pill   mb-3'>
								<img src={svelte} alt='svelte' width='100px' height='100px' />
								<p className='fw-bold h2'>SVELTE</p>
							</div>
						</div> */}
						<div className='col-md-3'>
							<div className='d-flex align-items-center justify-content-between shadow-lg p-4 bg-white rounded-pill mb-3 '>
								<img src={react} alt='react' width='100px' height='100px' />
								<p className='fw-bold h2'>REACT</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
}

export default Skills
