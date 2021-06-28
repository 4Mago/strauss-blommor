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
          <Link to='/kontakt' onClick={scrollToTop} style={{ textDecoration: 'none' }}><Button>Kontakta oss!</Button></Link>
        </NavContainer>
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
font-size: 0.8rem;
padding: 0.8rem 0.2rem;
width: 10rem;
margin: 10px;
display: flex;
justify-content: center;
border-radius: 2rem;
background: #273430;
outline: none;
color: white;
cursor: pointer;
position: absolute;
top: 81.5vh;
right: -200px;

@media screen and (max-width: 1000px) {}  

@media screen and (max-height: 500px) {}
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

const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-decoration: none;
  color: white;
  position: sticky;
  top: -75%;
  left: 35%;
  transform: translate(-26%, -93%);
  z-index: 999;
  height: 50px;
  width: 98%;
  
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

  a {
    padding-bottom: 55px;
  }
`

