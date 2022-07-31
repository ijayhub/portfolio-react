import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import social from '../img/social.svg'
import { useState } from 'react'
import top from '../img/top.png'

const Form1 = () => {
	const [name, setName] = useState(' ')
	const [email, setEmail] = useState(' ')
	const [message, setMessage] = useState(' ')

	const handleSubmit = (e) => {
		e.preventDefault()
		setName('')
		setEmail('')
		setMessage('')
		
	}
	return (
		<div id='contact'>
			<div className='container mt-5 slide-in-left'>
				<div className='col text-center'>
					<h4 className='display-5 fw-bold text-warning'>SAY HELLO</h4>
				</div>
				<div className='row '>
					<div className='col-sm-6 col-md-12 col-lg-6'>
						<Form
							action='https://fabform.io/f/i6-HY8g'
							method='post'
							onSubmit={handleSubmit}>
							<Form.Group className='mb-3' controlId='formBasicName'>
								<Form.Label>Names</Form.Label>
								<Form.Control
									type='text'
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
							</Form.Group>
							<Form.Group className='mb-3' controlId='formBasicEmail'>
								<Form.Label>Email address</Form.Label>
								<Form.Control
									type='email'
									placeholder='Enter email'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
								<Form.Text className='text-muted'>
									We'll never share your email with anyone else.
								</Form.Text>
							</Form.Group>
							<Form.Group className='mb-3' controlId='formBasicPassword'>
								<Form.Label>Your message</Form.Label>
								<textarea
									className='form-control textarea'
									id='exampleFormControlTextarea1'
									rows='3'
									value={message}
									onChange={(e) => setMessage(e.target.value)}></textarea>
							</Form.Group>
							<Button type='submit' className='btn btn-warning'>
								Send
							</Button>
						</Form>
					</div>
					<div className='col-md-6 swirl-in-fwd'>
						<img src={social} alt='social' className='code' />
					</div>
				</div>
			</div>
			<div className='d-flex align-items-center justify-content-end'>
				<a href='#top' className="mx-3">
					<img src={top} alt='' />
				</a>
			</div>
		</div>
	);
}

export default Form1
