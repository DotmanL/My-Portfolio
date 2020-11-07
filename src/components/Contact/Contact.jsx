import React, { useState } from 'react'
import axios from 'axios'

import { toast } from 'react-toastify'
import ButtonSpin from '../ButtonSpin/ButtonSpin'

import {
	Container,
	Header,
	Title,
	FormContainer,
	FormInput,
	FormInputT,
	SubTitle,
	Button,
	Footer,
	Footl,
} from './Contact.styles'

const Contact = () => {
	const [inputs, setInputs] = useState({ email: '', name: '', message: '', subject: '' })
	const [loading, setLoading] = useState(false)

	const handleChange = (event) => {
		const { name, value } = event.target
		setInputs((prev) => ({ ...prev, [name]: value }))
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setLoading(true)
		setInputs({ email: '', name: '', message: '', subject: '' })

		const { email, name, message, subject } = inputs
		axios({
			method: 'POST',
			url: 'https://dotcodesapi.herokuapp.com/mailMe',
			data: {
				name,
				email,
				message,
				subject,
			},
		})
			.then((res) => {
				toast.success('Message Sent')
				setLoading(false)
			})
			.catch((error) => {
				toast.error('Contact me directly via mail oladotunlawal7@gmail.com', {
					autoClose: 8000,
				})
			})
	}

	return (
		<Container>
			<Header>
				<Title>Contact</Title>
			</Header>
			<form onSubmit={handleSubmit}>
				<FormContainer>
					<SubTitle> Hire me by filling out this form</SubTitle>

					<FormInput
						type='text'
						name='name'
						onChange={handleChange}
						value={inputs.name}
						placeholder='Name'
						required
					/>

					<FormInput
						type='email'
						name='email'
						onChange={handleChange}
						value={inputs.email}
						placeholder='Email'
						required
					/>

					<FormInput
						type='text'
						name='subject'
						onChange={handleChange}
						value={inputs.subject}
						placeholder='Subject'
						required
					/>

					<FormInputT
						name='message'
						type='textarea'
						placeholder='Message'
						onChange={handleChange}
						value={inputs.message}
						rows='10'
						cols='30'
					/>
					<Button type='submit'>
						{!loading && <span>Submit</span>}
						{loading && (
							<span
								style={{
									display: 'flex',
									flexDirection: 'row',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								Submitting <ButtonSpin />
							</span>
						)}
					</Button>
				</FormContainer>
			</form>
			<Footer>
				Created with React by <Footl href='https://github.com/dotmanL'>DotmanL </Footl>
			</Footer>
		</Container>
	)
}

export default Contact
