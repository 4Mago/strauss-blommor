import React from 'react'
import Home from './pages/home.component'
import Navbar from './components/header/navbar'
import Brollop from './pages/brollop.component'
import { Route } from 'react-router-dom'
import Footer from './components/footer/footer.component'
import Begravning from './pages/begravning.component'
import Buketter from './pages/buketter.component'
import Kontakt from './pages/kontakt.component'
import HomeContextProvider from './store/home-context.component'
import BegravningContextProvider from './store/begravning.context'
import KontaktContextProvider from './store/kontakt.context'
import BuketterContextProvider from './store/buketter.context'
import BrollopContextProvider from './store/brollop.context'
import styled from 'styled-components'

const App = () => (
	<ContCont>
		<Navbar />
		<Route path={'/'} exact>
			<HomeContextProvider>
				<Home />
			</HomeContextProvider>
		</Route>

		<Route path={'/brollop'}>
			<BrollopContextProvider>
				<Brollop />
			</BrollopContextProvider>
		</Route>
		<Route path={'/begravning'}>
			<BegravningContextProvider>
				<Begravning />
			</BegravningContextProvider>
		</Route>
		<Route path={'/buketter'}>
			<BuketterContextProvider>
				<Buketter />
			</BuketterContextProvider>
		</Route>
		<Route path={'/kontakt'}>
			<KontaktContextProvider>
				<Kontakt />
			</KontaktContextProvider>
		</Route>
		<Footer />
	</ContCont>
)
export default App

const ContCont = styled.div`
	background-color: #273420;
`