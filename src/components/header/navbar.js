import React, { useState, useEffect } from "react"
import "../the-big-file.css"
import { Link } from "react-router-dom"
import sanityClient from "../../Client"
import imageUrlBuilder from "@sanity/image-url"
import styled from "styled-components"

const Header = () => {
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
      </HeaderContainer>
    </ContCont>
  )
}

export default Header


const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const ImgContainer = styled.div`
  margin-top: 230px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Img = styled.img`
  max-height: 145px;
`

const ContCont = styled.div`
  width: 100%;
  position: relative;
`

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  text-decoration: none;
  color: white;
  @media screen and (max-width: 700px) {
    width: 100%;
    padding-right: 8px;
    padding-left: 8px;
  }

  @media screen and (max-width: 500px) {
  }
`
const HeaderContainer = styled.div`
  display: flex;
  flex-flow: column;
  position: absolute;
  z-index: 9999;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
`


const NavLinks = styled.div`
  display: flex;
  font-family: "Poppins", sans-serif;
  font-size: 1em;
  font-weight: 400;
  color: white;
  justify-content: space-between;

  @media screen and (min-width: 700px) {
  }

  @media screen and (max-width: 500px) {
  }
`