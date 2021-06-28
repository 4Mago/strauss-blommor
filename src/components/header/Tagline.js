import React, { useContext } from "react"
import { HomeContext } from "../../store/home-context.component"
import styled from "styled-components"

const TaglineDiv = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  flex-flow: column;
  gap: 22px;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #273421;
  position: relative;
`

const TaglineTitle = styled.h2`
  color: white;
  z-index: 9999;
`

const TaglineText = styled.p`
  color: white;
  width: 550px;
  z-index: 9999;

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`

const Tagline = () => {
  const { home } = useContext(HomeContext)

  return (
    <>
      <TaglineDiv>
        <TaglineTitle>{home.title}</TaglineTitle>
        <TaglineText>{home.description2}</TaglineText>
      </TaglineDiv>
    </>
  )
}

export default Tagline
