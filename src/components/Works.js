import React from 'react'
import mealGenerator from '../img/mealGenerator.jpeg'
import chart1 from '../img/chart.jpg'
import News from '../img/news.png'
import menulist from '../img/menulist.gif'
import Cocktail from '../img/cocktail.png'
import Landing from '../img/travel-landing-page.png'

const Works = () => {
	const chart= 'https://react-barchart-dashboard.netlify.app';
	const meal = 'https://meal-webapp.netlify.app';
	const news = 'https://news-nytimes.netlify.app';
	const Menu = 'https://nigerian-meals.netlify.app/';
	const cocktail = 'https://cocktail-d.netlify.app/';
	const landing = ' https://basic-landing-page-website.vercel.app';
	

    return (
			<div className='bg-hero scroll' id='portfolio'>
				<div className='container'>
					<div className='col my-3 text-center'>
						<h2 className='text-white display-4 fw-bolder pt-3 '>Portfolio</h2>
					</div>
					<div className='row '>
						<div class='col-md-4 slide-in-bottom'>
							<img src={chart1} alt={chart1} className='img-size' />

							<p className='text-center'>
								<a
									href={chart}
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
							<img src={menulist} alt={menulist} className='img-size' />

							<p className='text-center'>
								<a
									href={Menu}
									target='_blank'
									rel='noopener noreferrer'
									className='text-white'>
									Live Link to the work
								</a>
							</p>
						</div>
						<div class='col-md-4 slide-in-bottom '>
							<img src={Cocktail} alt={Cocktail} className='img-size' />
							<p className='text-center'>
								<a
									href={cocktail}
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
