import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react'

const Form1 = () => {
	const [name, setName] = useState(' ')
	const [email, setEmail] = useState(' ')
	const [message, setMessage] = useState(' ')

	
	const link='mailto: ijeonyi@gmail.com' 
			
	
    return (
			<div id='contact'>
				<div className='container mt-5'>
					<div className='row'>
						<div className='col text-center'>
							<h4 className='display-5 fw-bold'>SAY HELLO</h4>
							
						</div>
					</div>
					<div className='col'>
						<Form>
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
									class='form-control'
									id='exampleFormControlTextarea1'
									rows='3'
									value={message}
									onChange={(e) => setMessage(e.target.value)}></textarea>
							</Form.Group>
							<Button variant='primary' type='submit'>
								<a
									href={link}
									target='_blank'
									rel='noreferrer'
									className='btn btn-primary'>
									Send
								</a>
							</Button>
						</Form>
					</div>
				</div>
			</div>
		);
}

export default Form1
