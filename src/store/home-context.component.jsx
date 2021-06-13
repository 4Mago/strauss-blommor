import React, { useState, useEffect, createContext } from 'react'
import sanityClient from '../Client'

export const HomeContext = createContext()

const HomeContextProvider = props => {
	const [home, setHome] = useState('')
	const [loaded, setLoaded] = useState(false)
	useEffect(() => {
		const homeQuery = `*[_type == "hemsida"]`
		sanityClient.fetch(homeQuery).then(home => {
			home.forEach(home => {
				setHome(home)
			})
		
			setLoaded(true)
		})
		return
	}, [])
	return (
		<HomeContext.Provider value={{ home }}>
			{loaded ? props.children : null}
		</HomeContext.Provider>
	)
}

export default HomeContextProvider
