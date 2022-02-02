import React from 'react'
import { Container, Navbar, Nav} from 'react-bootstrap';

const NavigationBar = () => {
	const blogLink = 'https://ijaycent.hashnode.dev/';
	return (
		<div>
			<Navbar bg='dark' expand='lg' className='fixed-top overflow-hidden'>
				<Container>
					<Navbar.Brand
						href='#'
						className='navHeader fs-3 display-3 text-white mx-5'>
						Centrity
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='navbarScroll' />
					<Navbar.Collapse
						id='navbarScroll'
						className='btn-pad overflow-hidden'>
						<Nav
							className='me-auto my-2 my-lg-0 mx-2  '
							style={{ maxHeight: '300px' }}
							navbarScroll>
							<Nav.Link href='/' className='text-white lh-lg'>
								Home
							</Nav.Link>
							<Nav.Link href='#about' className='text-white lh-lg'>
								About
							</Nav.Link>
							<Nav.Link href={blogLink} target='_blank' rel='noreferrer' className='text-white lh-lg'>
									Blog
							</Nav.Link>
							<Nav.Link href='#skills' className='text-white btn-pad lh-lg'>
								Skills
							</Nav.Link>
							<Nav.Link href='#portfolio' className='text-white btn-pad lh-lg'>
								Portfolio
							</Nav.Link>
							<Nav.Link href='#contact' className='text-white btn-pad lh-lg'>
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
