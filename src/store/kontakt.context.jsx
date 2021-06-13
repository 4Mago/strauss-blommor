import React, { useState, useEffect, createContext } from 'react'
import sanityClient from '../Client'

export const KontaktContext = createContext()

const KontaktContextProvider = props => {
	const [kontakt, setKontakt] = useState('')
    
	useEffect(() => {
		const kontaktQuery = `*[_type == "kontakt"]`
		sanityClient.fetch(kontaktQuery).then(kontakt => {
			kontakt.forEach(kontakt => {
				setKontakt(kontakt)
			})
		})
		return
	}, [])
	return (
		<KontaktContext.Provider value={{ kontakt }}>
			{props.children}
		</KontaktContext.Provider>
	)
}

export default KontaktContextProvider
