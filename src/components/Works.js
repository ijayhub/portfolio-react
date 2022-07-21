import React from 'react'
import mealGenerator from '../img/mealGenerator.jpeg'
import travelTour from '../img/travelTour.png'
import galleryClick from '../img/gallery-click.png'
import News from '../img/news.png'
import book from '../img/bookapp.png'
import Note from '../img/note-app.png'
import Landing from '../img/travel-landing-page.png'




const Works = () => {
	const travel = 'https://fun-travel.vercel.app/'
	const travelGit = 'https://github.com/ijayhub/fun-travel';
	const gallery = 'https://ijayhub.github.io/gallery-click/';
	const galleryGit = 'https://github.com/ijayhub/gallery-click';
	const meal = 'https://meal-webapp.netlify.app';
	const mealGit = 'https://github.com/ijayhub/meal-app';
	const news = 'https://news-nytimes.netlify.app';
	const newsGit = 'https://github.com/ijayhub/news-articles';
	const Book = 'https://book-app1.netlify.app';
	const BookGit = 'https://github.com/ijayhub/book-app';
	const note = 'https://note-web-app.netlify.app';
	const noteGit = 'https://github.com/ijayhub/note-app';
	const landing = ' https://basic-landing-page-website.vercel.app';
	const landingGit = 'https://github.com/ijayhub/basic-landing-page-website';

    return (
			<div className='bg-hero' id='portfolio'>
				<div className='container'>
					<div className='col my-5 text-center'>
						<h2 className='text-white display-4 fw-bolder pt-5 '>Portfolio</h2>
					</div>
					<div className='row'>
						
						<div class='col-md-4 slide-in-bottom px-5'>
							<img
								src={galleryClick}
								alt={galleryClick}
								style={{ width: '300px', height: '170px', objectFit: 'cover' }}
							/>

							<p>
								<a
									href={gallery}
									target='_blank'
									rel='noopener noreferrer'
									className='px-3 text-white'>
									Live Link to the work
								</a>
								<a
									href={galleryGit}
									target='_blank'
									rel='noopener noreferrer'
									className='text-white'>
									Link to the GitHub codes
								</a>
							</p>
						</div>
						<div class='col-md-4 slide-in-left px-5'>
							<img
								src={mealGenerator}
								alt={mealGenerator}
								style={{ width: '300px', height: '170px', objectFit: 'cover' }}
							/>
							<p>
								<a
									href={meal}
									target='_blank'
									rel='noopener noreferrer'
									className='px-3 text-white'>
									Live Link to the work
								</a>
								<a
									href={mealGit}
									target='_blank'
									rel='noopener noreferrer'
									className='text-white'>
									Link to the GitHub codes
								</a>
							</p>
						</div>
						<div class='col-md-4 slide-in-left px-5'>
							<img
								src={News}
								alt={News}
								style={{ width: '300px', height: '170px', objectFit: 'cover' }}
							/>
							<p>
								<a
									href={news}
									target='_blank'
									rel='noopener noreferrer'
									className='text-white mx-2'>
									Live Link to the work
								</a>
								<a
									href={newsGit}
									target='_blank'
									rel='noopener noreferrer'
									className='text-white'>
									Link to the GitHub codes
								</a>
							</p>
						</div>
						<div class='col-md-4 slide-in-right px-5'>
							<img
								src={book}
								alt={book}
								style={{ width: '300px', height: '170px', objectFit: 'cover' }}
							/>

							<p>
								<a
									href={Book}
									target='_blank'
									rel='noopener noreferrer'
									className='text-white px-3'>
									Live Link to the work
								</a>
								<a
									href={BookGit}
									target='_blank'
									rel='noopener noreferrer'
									className='text-white'>
									Link to the GitHub codes
								</a>
							</p>
						</div>
						<div class='col-md-4 slide-in-bottom px-5'>
							<img
								src={Note}
								alt={Note}
								style={{ width: '300px', height: '170px', objectFit: 'cover' }}
							/>
							<p>
								<a
									href={note}
									target='_blank'
									rel='noopener noreferrer'
									className='px-3 text-white'>
									Live Link to the work
								</a>
								<a
									href={noteGit}
									target='_blank'
									rel='noopener noreferrer'
									className='text-white'>
									Link to the GitHub codes
								</a>
							</p>
						</div>
						<div class='col-md-4 slide-in-bottom px-5'>
							<img
								src={Landing}
								alt={Landing}
								style={{ width: '300px', height: '170px', objectFit: 'cover' }}
							/>
							<p>
								<a
									href={landing}
									target='_blank'
									rel='noopener noreferrer'
									className='px-3 text-white'>
									Live Link to the work
								</a>
								<a
									href={landingGit}
									target='_blank'
									rel='noopener noreferrer'
									className='text-white'>
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
