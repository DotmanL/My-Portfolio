import styled from 'styled-components'
import { ReactComponent as css } from './logos/css-3.svg'
import { ReactComponent as express } from './logos/express.svg'
import { ReactComponent as figma } from './logos/figma.svg'
import { ReactComponent as firebase } from './logos/firebase.svg'
import { ReactComponent as gatsby } from './logos/gatsby.svg'
import { ReactComponent as git } from './logos/git.svg'
import { ReactComponent as github } from './logos/github.svg'
import { ReactComponent as html } from './logos/html5.svg'
import { ReactComponent as invision } from './logos/invision.svg'
import { ReactComponent as mongodb } from './logos/mongodb.svg'
import { ReactComponent as node } from './logos/nodejs.svg'
import { ReactComponent as postgre } from './logos/postgresql.svg'
import { ReactComponent as react } from './logos/react.svg'
import { ReactComponent as redux } from './logos/redux.svg'
import { ReactComponent as netlify } from './logos/netlify.svg'
import { ReactComponent as heroku } from './logos/heroku.svg'
import { ReactComponent as js } from './logos/javascript.svg'
import { ReactComponent as ts } from './logos/typescript.svg'
import { ReactComponent as net } from './logos/Microsoft_.NET_logo.svg'
import { ReactComponent as csharp } from './logos/csharp.svg'
import { ReactComponent as sqlserver } from './logos/sqlserver.svg'
import { ReactComponent as azure } from './logos/azure.svg'

import Bckg from './jakspot.jpg'

export const Container = styled.div`
	width: 100%;
	background: #023e8a;
	/* background-image: url(${Bckg}); */
	display: flex;
	flex-direction: column;
	/* border-bottom: 1px solid black; */
	@media screen and (max-width: 800px) {
	}
`
export const SubContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	margin-bottom: 15px;
	margin-top: 30px;
	padding: 20px 70px;
	cursor: pointer;
	@media screen and (max-width: 800px) {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding: 0px;
		width: 100vw;
	}
`

export const Header = styled.div`
	display: flex;
	flex-direction: column;
	align-self: flex-start;
	justify-content: center;
	align-items: center;
	border-bottom: 2px solid #023e8a;
	height: 65px;
	padding: 0px;
	width: 200px;
	margin: 5px 0px 0px 40px;

	@media screen and (max-width: 800px) {
		margin: 5px 5px 0px 0px;
	}
`

export const Title = styled.h4`
	font-size: 35px;
	color: white;
	font-family: 'Arvo', serif;
`
export const Card = styled.div`
	display: flex;
	background: white;
	flex-direction: row;
	flex-flow: row wrap;
	padding: 5px 20px;
	border: 2px solid #023e8a;
	justify-content: space-around;
	border-radius: 8px;
	width: 25%;
	@media screen and (max-width: 800px) {
		display: flex;
		margin-right: auto;
		margin-left: auto;
		width: 85vw;
		height: auto;
		padding: 10px 10px;
	}

	:hover {
		cursor: pointer;
		transform: scale(1.04);
		transition: transform 2s cubic-bezier(0.25, 0.45, 0.45, 0.95);
	}
`
export const STitle = styled.h2`
	color: black;
	border-radius: 8px;
	padding: 2px 2px;
	text-align: center;
	width: 85vw;
	/* :hover {
		border-bottom: 2px solid black;

		cursor: pointer;
	} */
	@media screen and (max-width: 800px) {
	}
`

export const Css = styled(css)`
	width: 100px;
	height: 100px;
`

export const Express = styled(express)`
	width: 100px;
	height: 100px;
`

export const Figma = styled(figma)`
	width: 100px;
	height: 100px;
`

export const FireBase = styled(firebase)`
	width: 100px;
	height: 100px;
`

export const Gatsby = styled(gatsby)`
	width: 100px;
	height: 100px;
`

export const Git = styled(git)`
	width: 100px;
	height: 100px;
	margin-top: 15px;
`

export const Github = styled(github)`
	width: 100px;
	height: 100px;
`

export const Html = styled(html)`
	width: 100px;
	height: 100px;
`

export const Invision = styled(invision)`
	width: 100px;
	height: 100px;
`

export const Nodejs = styled(node)`
	width: 100px;
	height: 100px;
`

export const Postgre = styled(postgre)`
	width: 100px;
	height: 100px;
`

export const Redux = styled(redux)`
	width: 100px;
	height: 100px;
`

export const Reactjs = styled(react)`
	width: 100px;
	height: 100px;
`

export const MongoDb = styled(mongodb)`
	width: 100px;
	height: 100px;
`

export const Heroku = styled(heroku)`
	width: 100px;
	height: 100px;
`
export const Netlify = styled(netlify)`
	width: 100px;
	height: 100px;
	margin-top: 15px;
`
export const Jscript = styled(js)`
	width: 100px;
	height: 100px;
	margin-top: 15px;
`
export const Typescript = styled(ts)`
	width: 100px;
	height: 100px;
	margin-top: 15px;
`

export const Dotnet = styled(net)`
	width: 100px;
	height: 100px;
	margin-top: 15px;
`

export const Csharp = styled(csharp)`
	width: 100px;
	height: 100px;
	margin-top: 15px;
`

export const SqlServer = styled(sqlserver)`
	width: 100px;
	height: 100px;
	margin-top: 15px;
`

export const Azure = styled(azure)`
	width: 200px;
	height: 200px;
	margin-top: 15px;
`