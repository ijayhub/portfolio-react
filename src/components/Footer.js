import React from 'react'
import cr1 from '../img/cr1.png'
import mail from '../img/envelope-fill (1).svg'
import li from '../img/linkedin.svg'
import tw from '../img/twitter (1).svg'
import ig from '../img/instagram (1).svg'
import wh from '../img/whatsapp.svg'

const Footer = () => {
    const linkedin = 'https://www.linkedin.com/in/ijeoma-igboagu/';
    const whatApp = 'https://wa.me/+2348125089145';
    const twitter = 'https://twitter.com/ijaydimples'
    const instagram ='https://www.instagram.com/ij.ijay/';
    return (
			<div className='bg-hero mt-5 scroll'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-4 mt-3 '>
							<img src={cr1} alt='' className='img-fluid mb-1 ' />
							<h2 className='text-white navHeader display-6 fw-bold'>
								CentRity
							</h2>
						</div>
						<div className='col-md-4 mt-5'>
							<h3 className='text-white  fw-bold'>Page Links</h3>
							<ul className='list-unstyled'>
								<a href='/' className='text-decoration-none'>
									<li className='text-muted mb-2'>Home</li>
								</a>
								<a href='#about-me' className='text-decoration-none'>
									<li className='text-muted mb-2'>About</li>
								</a>
								<a
									href='https://ijaycent.hashnode.dev/'
									className='text-decoration-none'>
									<li className='text-muted mb-2'>Blog</li>
								</a>
								<a href='#skills' className='text-decoration-none'>
									<li className='text-muted mb-2'>Skills</li>
								</a>
								<a href='#portfolio' className='text-decoration-none'>
									<li className='text-muted mb-2'>Works</li>
								</a>
								<a href='#contact' className='text-decoration-none'>
									<li className='text-muted mb-2 '>Contact</li>
								</a>
							</ul>
						</div>
						<div className='col-md-4 mt-5'>
							<h3 className='text-white fw-bold'>Get in touch</h3>
							<p>
								<img src={mail} alt='mail' />
								<span className='fs-6 mb-2 text-muted'> ijeonyi@gmail.com</span>
							</p>
							<div>
								<a href={linkedin} target='_blank' rel='noreferrer'>
									<img src={li} alt='linkedin' className='me-3' />
								</a>
								<a href={twitter} target='_blank' rel='noreferrer'>
									<img src={tw} alt='twitter' className='me-3' />
								</a>
								<a href={instagram} target='_blank' rel='noreferrer'>
									<img src={ig} alt='instagram' className='me-3' />
								</a>
								<a href={whatApp} target='_blank' rel='noreferrer'>
									<img src={wh} alt='whatsapp' />
								</a>
							</div>
						</div>
					</div>
					<hr />
					<div className='text-center'>
						<p className='pt-5'>
							<a
								href='http://github.com/ijayhub'
								target='_blank'
								rel='noreferrer'
								className='text-white text-decoration-none'>
								Coded and developed by &copy; Ijeoma
							</a>
						</p>
					</div>
				</div>
			</div>
		);
}

export default Footer
