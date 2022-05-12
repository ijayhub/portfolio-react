import React from 'react'
import video3 from '../Video/house.mp4';
import travelTour from '../img/travelTour.png'
import reminderApp from '../img/reminder-app.png'




const Works = () => {
	const travel = 'https://fun-travel.vercel.app/'
	const travelGit = 'https://github.com/ijayhub/fun-travel';
	
	const reminder = 'https://ijayhub.github.io/Birthday-reminder/';
	const reminderGit ='https://github.com/ijayhub/Birthday-reminder/tree/master';
	const house = 'https://crhse.netlify.app';
	const houseGit = 'https://github.com/ijayhub/housing-sass';

    return (
			<div className='bg-light' id='portfolio'>
				<div className='container'>
					<div className='col mt-5 text-center'>
						<h2 className='display-3'>Portfolio</h2>
						<p className='text-muted'>My Works</p>
					</div>
					<div className='row '>
						<div class='col-md-4 slide-in-right '>
							<img
								src={travelTour}
								alt={travelTour}
								style={{ width: '300px', height: '170px', objectFit: 'cover' }}
							/>
							<p>
								<a
									href={travel}
									target='_blank'
									rel='noopener noreferrer'
									className='text-dark mx-2'>
									Live Link to the work
								</a>
								<a
									href={travelGit}
									target='_blank'
									rel='noopener noreferrer'
									className='text-dark'>
									Link to the GitHub codes
								</a>
							</p>
						</div>
						<div class='col-md-4 slide-in-bottom'>
							<img
								src={reminderApp}
								alt={reminderApp}
								style={{ width: '300px', height: '170px', objectFit: 'cover' }}
							/>

							<p>
								<a
									href={reminder}
									target='_blank'
									rel='noopener noreferrer'
									className='text-dark px-3'>
									Live Link to the work
								</a>
								<a
									href={reminderGit}
									target='_blank'
									rel='noopener noreferrer'
									className='text-dark'>
									Link to the GitHub codes
								</a>
							</p>
						</div>
						<div class='col-md-4 slide-in-left'>
							<iframe
								title='Camp'
								src={video3}
								className='text-center'></iframe>
							<p>
								<a
									href={house}
									target='_blank'
									rel='noopener noreferrer'
									className='px-3 text-dark'>
									Live Link to the work
								</a>
								<a
									href={houseGit}
									target='_blank'
									rel='noopener noreferrer'
									className='text-dark'>
									Link to the GitHub codes
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		);
}

export default Works
