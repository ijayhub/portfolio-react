import React from 'react'
import { Container, Navbar, Nav} from 'react-bootstrap';

const NavigationBar = () => {
	const blogLink = 'https://ijaycent.hashnode.dev/';
	return (
		<div>
			<Navbar bg='dark' expand='lg' className='fixed-top '>
				<Container>
					<Navbar.Brand
						href='#'
						className='navHeader fs-3 display-3 text-white mx-5'>
						Centrity
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='navbarScroll' />
					<Navbar.Collapse
						id='navbarScroll'
						className='btn-pad'>
						<Nav
							className='me-auto my-2 my-lg-0 mx-2  '
							style={{ maxHeight: '300px' }}
							navbarScroll>
							<Nav.Link href='/' className='text-white lh-lg navigation'>
								Home
							</Nav.Link>
							<Nav.Link href='#about' className='text-white lh-lg navigation'>
								About
							</Nav.Link>
							<Nav.Link
								href={blogLink}
								target='_blank'
								rel='noreferrer'
								className='text-white lh-lg navigation'>
								Blog
							</Nav.Link>
							<Nav.Link
								href='#skills'
								className='text-white btn-pad lh-lg navigation'>
								Skills
							</Nav.Link>
							<Nav.Link
								href='#portfolio'
								className='text-white btn-pad lh-lg navigation'>
								Portfolio
							</Nav.Link>
							<Nav.Link
								href='#contact'
								className='text-white btn-pad lh-lg navigation'>
								Contact
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default NavigationBar
