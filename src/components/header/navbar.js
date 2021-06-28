import React, { useState, useEffect } from "react"
import "../the-big-file.css"
import { Link } from "react-router-dom"
import sanityClient from "../../Client"
import imageUrlBuilder from "@sanity/image-url"
import styled from "styled-components"
import ScrollToTop from "../Misc/scrollToTop"

const Header = ({ scrollToTop }) => {
  const [header, setHeader] = useState("")


  useEffect(() => {
    const headerQuery = `*[_type == "header"]`

    sanityClient.fetch(headerQuery).then((header) => {
      header.forEach((header) => {
        setHeader(header)
      })
    })
    return
  }, [])

  return (
    <ContCont>
      <HeaderContainer>
        <ImgContainer>
          <Link to="/">
            <Img alt="logo" src={urlFor(header.logo).url()} />
          </Link>
        </ImgContainer>
        <NavContainer id="sticky">
          <NavLinks>
            {header.menu
              ? header.menu.map((item, id) => {
                return (
                  <Link
                    style={{ color: 'white' }}
                    key={id}
                    className="menu-item"
                    onClick={ScrollToTop}
                    to={`/${item
                      .replace(/å/g, "a")
                      .replace(/Å/g, "a")
                      .replace(/ä/g, "a")
                      .replace(/Ä/g, "a")
                      .replace(/ö/g, "o")
                      .replace(/Ö/g, "o")
                      .toLowerCase()}`}
                  >
                    {item}
                  </Link>
                )
              })
              : null}
          </NavLinks>
        </NavContainer>
        {window.location.href === 'http://localhost:3000/kontakt' ?
          null :
          <MiddlePart>
            <Link to='/kontakt' onClick={scrollToTop} style={{ textDecoration: 'none' }}><Button>Kontakta oss!</Button></Link>
          </MiddlePart>}
      </HeaderContainer>
    </ContCont>
  )
}

export default Header


const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const Button = styled.button`
font-weight: 100;
color: black;
font-size: 1rem;
padding: 1rem 0.5rem;
width: 11.5rem;
display: flex;
justify-content: center;
border-radius: 2rem;
background: #273430;
outline: none;
color: white;
cursor: pointer;
transform: translate(-120%, 700%);

@media screen and (max-width: 1000px) {
  transform: translate(-80%, 700%);
  }
  

@media screen and (max-height: 500px) {
  transform: translate(-120%, 650%);
  }
`

const ImgContainer = styled.div`
width: 10%;
position: sticky;
top: 1.5em;
left: 2.5em;
z-index: 9999;

@media screen and (max-height: 600px) {
  }

`

const Img = styled.img`
  max-height: 105px;
  transition: ease-in-out 0.3s;
  z-index: 999;

  &:hover{
    transform: scale(1.05);
    transition: ease-in-out 0.3s;
  }
`

const ContCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`

const MiddlePart = styled.div`
  color: white;
  width: 250px;
  z-index: 999;
  position: sticky;
  top:-39%;
  left: 90vw;
  @media screen and (max-width: 500px) {
    width: 1px;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
  @media screen and (max-height: 900px) {
    top:-45%;
  }
  @media screen and (max-height: 850px) {
    top:-48%;
  }
  @media screen and (max-height: 800px) {
    top:-50%;
  }
  @media screen and (max-height: 750px) {
    top:-53%;
  }
  @media screen and (max-height: 700px) {
    top:-57%;
  }
  @media screen and (max-height: 650px) {
    top:-58%;
  }
  @media screen and (max-height: 600px) {
    top:-68%;
  }
  @media screen and (max-height: 575px) {
    top:-70%;
  }
  @media screen and (max-height: 550px) {
    top:-72.5%;
  }
  @media screen and (max-height: 525px) {
    top:-77%;
  }
  @media screen and (max-height: 500px) {
    top:-82%;
  }
  @media screen and (max-height: 475px) {
    top:-86%;
  }
  @media screen and (max-height: 450px) {
    top:-88%;
  }
  @media screen and (max-height: 435px) {
    top:-95%;
  }
  @media screen and (max-height: 425px) {
    top:-100%;
  }
`


const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: white;
  position: sticky;
  top: -78%;
  left: 35%;
  transform: translate(-26%, -93%);
  z-index: 999;
  height: 60px;
  width: 98%;


  @media screen and (max-width: 1100px) {
  
  }

  @media screen and (max-width: 500px) {
  }
  @media screen and (max-height: 900px) {
    
  }
  @media screen and (max-height: 850px) {
  }
  @media screen and (max-height: 800px) {
    
  }
  @media screen and (max-height: 750px) {

  }
  @media screen and (max-height: 700px) {
  }
  @media screen and (max-height: 650px) {
    top: -64.7%;
  }
  @media screen and (max-height: 600px) {
    top: -63.7%;
  }
  @media screen and (max-height: 550px) {
    top: -62.7%;
    
  }
  @media screen and (max-height: 500px) {
    top: -60.7%;
  }
  @media screen and (max-height: 450px) {
    top: -58.7%;
  }
`
const HeaderContainer = styled.div`
  position: relative;
  height: 250vh;
  width: 100%;
  top: 0;
  color: white;
`


const NavLinks = styled.div`
  display: flex;
  font-family: "Poppins", sans-serif;
  font-size: 1em;
  font-weight: 400;
  color: white;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: 91vh;
  left: 75%;
  padding-left: 19%;
  transform: translate(-50%, -50%);
  height: 140px;
  width: 100vw;
  background: linear-gradient(180deg, #273420 0%, rgba(105, 135, 105, 0) 100.5%);

  @media screen and (max-width: 1100px) {
    padding-left: 35%;

  }
  @media screen and (max-height: 900px) {
  }

  @media screen and (max-height: 800px) {
  }
  @media screen and (max-height: 700px) {
  }
  @media screen and (max-height: 650px) {
  }
  @media screen and (max-height: 600px) {
  }
  @media screen and (max-height: 550px) {
  }


  @media screen and (min-width: 700px) {
  }

  @media screen and (max-width: 500px) {
    justify-content: center;
    padding-left: 0;

  }
`