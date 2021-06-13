import React, { createContext, useEffect, useState} from 'react'
import sanityClient from '../Client'

export const HeaderContext = createContext()

const HeaderContextProvider = (props) => {
    const [header, setHeader] = useState('')

    useEffect(() => {
        const headerQuery = `*[type == "header"]`
        sanityClient.fetch(headerQuery).then(header => {
           setHeader(header)
        })
        return
    }, [])


    return (
        <HeaderContext.Provider value={{header}}>
            {props.children}
        </HeaderContext.Provider>

    )
}

export default HeaderContextProvider
