import React, { useState, useEffect, createContext } from "react"
import sanityClient from "../Client"

export const BegravContext = createContext()

const BegravContextProvider = (props) => {
  const [begravning, setBegrav] = useState("")

  useEffect(() => {
    const begravQuery = `*[_type == "begravning"]`
    sanityClient.fetch(begravQuery).then((begrav) => {
      begrav.forEach((begrav) => {
        setBegrav(begrav)
      })
    })
    return
  }, [])
  return (
    <BegravContext.Provider value={{ begravning }}>
      {props.children}
    </BegravContext.Provider>
  )
}

export default BegravContextProvider
