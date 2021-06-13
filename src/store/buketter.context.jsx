import React, { useState, useEffect, createContext } from 'react'
import sanityClient from '../Client'

export const BuketterContext = createContext()

const BuketterContextProvider = props => {
	const [buketter, setBuketter] = useState('')
	useEffect(() => {
		const buketterQuery = `*[_type == "buketter"]`
		sanityClient.fetch(buketterQuery).then(buketter => {
			buketter.forEach(buketter => {
				setBuketter(buketter)
			})
		})
		return
	}, [])
	return (
		<BuketterContext.Provider value={{ buketter }}>
			{props.children}
		</BuketterContext.Provider>
	)
}

export default BuketterContextProvider
