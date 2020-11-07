import React, { Fragment } from 'react'
import spinner from './spin.svg'
import styled from 'styled-components'

const Container = styled.img`
	width: 60px;
	margin: 5px auto;
	display: block;
	@media screen and (max-width: 800px) {
		width: 50px;
	}
`

export default () => (
	<Fragment>
		<Container src={spinner} alt='Loading...' />
	</Fragment>
)
