import React from 'react'
import mealGenerator from '../img/mealGenerator.jpeg'
import galleryClick from '../img/gallery-click.png'
import News from '../img/news.png'
import book from '../img/bookapp.png'
import Note from '../img/note-app.png'
import Landing from '../img/travel-landing-page.png'

const Works = () => {
	const gallery = 'https://ijayhub.github.io/gallery-click/';
	const meal = 'https://meal-webapp.netlify.app';
	const news = 'https://news-nytimes.netlify.app';
	const Book = 'https://book-app1.netlify.app';
	const note = 'https://note-web-app.netlify.app';
	const landing = ' https://basic-landing-page-website.vercel.app';
	

    return (
			<div className='bg-hero scroll' id='portfolio'>
				<div className='container'>
					<div className='col my-3 text-center'>
						<h2 className='text-white display-4 fw-bolder pt-3 '>Portfolio</h2>
					</div>
					<div className='row '>
						<div class='col-md-4 slide-in-bottom'>
							<img src={galleryClick} alt={galleryClick} className='img-size' />

							<p className='text-center'>
								<a
									href={gallery}
									target='_blank'
									rel='noopener noreferrer'
									className='text-white text-center'>
									Live Link to the work
								</a>
							</p>
						</div>
						<div class='col-md-4 slide-in-left'>
							<div></div>
							<img
								src={mealGenerator}
								alt={mealGenerator}
								className='img-size'
							/>
							<p className='text-center'>
								<a
									href={meal}
									target='_blank'
									rel='noopener noreferrer'
									className='px-3 text-white'>
									Live Link to the work
								</a>
							</p>
						</div>
						<div class='col-md-4 slide-in-left'>
							<img src={News} alt={News} className='img-size' />
							<p className='text-center'>
								<a
									href={news}
									target='_blank'
									rel='noopener noreferrer'
									className='text-white '>
									Live Link to the work
								</a>
							</p>
						</div>
						<div class='col-md-4 slide-in-right'>
							<img src={book} alt={book} className='img-size' />

							<p className='text-center'>
								<a
									href={Book}
									target='_blank'
									rel='noopener noreferrer'
									className='text-white'>
									Live Link to the work
								</a>
							</p>
						</div>
						<div class='col-md-4 slide-in-bottom '>
							<img src={Note} alt={Note} className='img-size' />
							<p className='text-center'>
								<a
									href={note}
									target='_blank'
									rel='noopener noreferrer'
									className='text-white'>
									Live Link to the work
								</a>
							</p>
						</div>
						<div class='col-md-4 slide-in-bottom'>
							<img src={Landing} alt={Landing} className='img-size' />
							<p className='d-flex align-items-center justify-content-center'>
								<a
									href={landing}
									target='_blank'
									rel='noopener noreferrer'
									className='text-white'>
									Live Link to the work
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		);
}

export default Works
