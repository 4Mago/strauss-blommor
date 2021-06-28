import React, { useContext } from "react"
import { HomeContext } from "../../store/home-context.component"
import styled from "styled-components"
import sanityClient from "../../Client"
import imageUrlBuilder from "@sanity/image-url"

const Header = () => {
  const { home } = useContext(HomeContext)
  return (
    <OuterMain>
      <HeaderImage
        alt="hero image"
        className="heroimage"
        id="heroimage"
        style={{ backgroundImage: `url(${urlFor(home.heroImage).url()})` }}
      />
      <ColorShade />
      <MainInner>
        <MiddleText>
          <MiddlePart2>{home.title}</MiddlePart2>
          <MiddlePart>{home.description}</MiddlePart>
        </MiddleText>
      </MainInner>
    </OuterMain>
  )
}

export default Header

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const OuterMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 85.5vh;
  width: 100%;
  left: 0px;
  padding-top: 108px;
  background-color: #273420;
`

const HeaderImage = styled.div`
  position: absolute;
  background-attachment: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;

  @media screen and (max-width: 1400px) and (min-height: 900px)  { 
    height: 100vh;
    background-size: cover;
  }
  @media screen and (max-width: 1400px) and (min-height: 800px)  { 
    height: 100vh;
    background-size: cover;
  }

  @media screen and (max-width: 1070px)  { 
    height: 100vh;
    background-size: cover;
  }
`

const MainInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 100%;
  margin: 5vh;
  z-index: 99;	  

  @media screen and (min-width: 1100px) {
    display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  }
  @media screen and (max-width: 700px) {
    width: 100%;
    margin: 0;
    flex-flow: column;
    padding: 0;
  }
`

const ColorShade = styled.div`
  height: 100%;
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #273420;
  opacity: 60%;
  z-index: 10;
`

const MiddlePart = styled.div`
  color: white;
  display: flex;
  text-align: left;
  align-items: left;
  font-size: 18px;
  width: 350px;
  margin-top: 15px;
  position: sticky;
  top:0;
  right: 0;


  @media screen and (max-width: 500px) {
    width: 100%;
  }
`

const MiddlePart2 = styled.h2`
  color: white;
  display: flex;
  text-align: left;
  align-items: left;
  font-size: 36px;
  width: 350px;
  margin-top: 15px;
  z-index: 999;

  @media screen and (min-width: 1100px) {
    width: 75%;
    min-width: 492px;
    font-size: 56px;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    max-width: 350px;
  }
`

const MiddleText = styled.div`
  color: white;
  display: flex;
  flex-flow: column;
  text-align: center;
  align-items: left;
  justify-content: center;
  z-index: 999;


  @media screen and (max-width: 900px) {
    width: 70%;
    margin-left: 8%;
  }
  @media screen and (max-width: 500px) {
    width: 90%;
    margin-left: 0;

  }
`
