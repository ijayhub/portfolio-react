import React from 'react'
import video1 from '../Video/camp.mp4'
import video2 from '../Video/blog.mp4';
import video3 from '../Video/house.mp4';




const Works = () => {
	const camp = 'https://campcentrity.netlify.app';
	const campGit = "https://github.com/ijayhub/camp-deploy-netlify";
	const blog = ' https://reactblogcr.netlify.app';
	const blogGit = 'https://github.com/ijayhub/blog-react-web-app';
	const house = 'https://crhse.netlify.app';
	const houseGit = 'https://github.com/ijayhub/housing-sass';

    return (
			<div className='bg-light' id='portfolio'>
				<div className='container'>
					<div className='col mt-5 text-center'>
						<h2 className='display-3'>Portfolio</h2>
						<p className='text-muted'>My Works</p>
					</div>
					<div className='row'>
						<div class='col-md-4'>
							<iframe title='Camp' src={video1}></iframe>
							<p>
								<a
									href={camp}
									target='_blank'
									rel='noreferrer'
									className='text-dark px-3'>
									Live Link to the work
								</a>
								<a
									href={campGit}
									target='_blank'
									rel='noreferrer'
									className='text-dark'>
									Link to the GitHub codes
								</a>
							</p>
						</div>
						<div class='col-md-4'>
							<iframe title='Camp' src={video2}></iframe>
							<p>
								<a
									href={blog}
									target='_blank'
									rel='noreferrer'
									className='text-dark px-3'>
									Live Link to the work
								</a>
								<a
									href={blogGit}
									target='_blank'
									rel='noreferrer'
									className='text-dark'>
									Link to the GitHub codes
								</a>
							</p>
						</div>
						<div class='col-md-4'>
							<iframe
								title='Camp'
								src={video3}
								className='text-center'></iframe>
							<p>
								<a
									href={house}
									target='_blank'
									rel='noreferrer'
									className='px-3 text-dark'>
									Live Link to the work
								</a>
								<a
									href={houseGit}
									target='_blank'
									rel='noreferrer'
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
