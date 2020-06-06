import React, { useState } from 'react'
import axios from 'axios'

import { toast } from 'react-toastify';

import { Container, Title, FormContainer, FormInput, FormInputT, SubTitle, Button, Footer, Footl } from './Contact.styles'

const Contact = () => {
	const [inputs, setInputs] = useState({ email: '', name: '', message: '', subject:'' })

	const handleChange = (event) => {
		const { name, value } = event.target
		setInputs((prev) => ({ ...prev, [name]: value }))
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setInputs({ email: '', name: '', message: '', subject: '' })

		const { email, name, message, subject } = inputs
		axios({
			method: 'POST',
			url: 'https://dotcodesapi.herokuapp.com/mailMe',
			data: {
				name,
				email,
        message,
        subject
			},
		})
			.then((response) => {
        toast.success('Message Sent')
     
			})
			.catch((error) => {
				toast.error('Contact me directly via mail oladotunlawal7@gmail.com')
			})
	}

	return (
		<Container>
       
			<Title>Contact</Title>
      <form onSubmit={handleSubmit}>
			<FormContainer>
				<SubTitle> Hire me by filling out this form</SubTitle>
			
					<FormInput
						type="text"
						name="name"
						onChange={handleChange}
						value={inputs.name}
						placeholder="Name"
						required
					/>

					<FormInput
						type="email"
						name="email"
						onChange={handleChange}
						value={inputs.email}
						placeholder="Email"
						required
					/>

            <FormInput
						type="text"
						name="subject"
						onChange={handleChange}
						value={inputs.subject}
						placeholder="Subject"
						required
					/>


					<FormInputT
						name="message"
						type="textarea"
						placeholder="Message"
						onChange={handleChange}
						value={inputs.message}
						rows="10"
						cols="30"
					/>
					<Button type='submit'> Submit </Button>
			
			</FormContainer>
      </form>
			<Footer> Created with React by <Footl href="https://github.com/dotmanL">DotmanL </Footl></Footer>
		</Container>
	)
}

export default Contact
