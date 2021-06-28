import React, { useContext } from "react"
import styled from "styled-components"
import { BegravContext } from "../store/begravning.context"
import imageUrlBuilder from "@sanity/image-url"
import sanityClient from "../Client"

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 5% 5%;
  color: #fff;
  font-family: poppins;
  margin-bottom: 100px;
`

const SegmentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column;
  padding: 55px 0;
`

const Segment = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 50px 0;


  @media screen and (max-width: 500px) {
    flex-flow: column;
  }
`

const Photo = styled.img`
  width: 47.5%;
  height: 400px;
  object-fit: cover;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`
const TextCont = styled.div`
  max-width: 800px;
`

const Text = styled.p`
  box-sizing: border-box;
  width: 100%;
  padding: 2% 10% 10% 0%;
  text-align: center;
`
const Text2 = styled.p`
  box-sizing: border-box;
  width: 100%;
  padding: 2% 10% 10% 10%;
  text-align: center;
`
const Header = styled.h2`
  font-size: 36px;
`

const Begravning = () => {
  const { begravning } = useContext(BegravContext)

  return (
    <>
      <Container>
        <OuterMain>
          <HeaderImage
            alt="hero image"
            className="heroimage"
            id="heroimage"
            style={{ backgroundImage: `url(${urlFor(begravning.heroImage).url()})` }}
          />
          <ColorShade />
          <MainInner>
            <MiddleText>
              <MiddlePart2>{begravning.title}</MiddlePart2>
              <MiddlePart>{begravning.description}</MiddlePart>
            </MiddleText>
          </MainInner>

        </OuterMain>

        <SegmentContainer>
          <Header>{begravning.title}</Header>
          <Segment>
            <TextCont>
              <Text>{begravning.description}</Text>
            </TextCont>
            <Photo
              alt="hero image"
              className="heroimage"
              id="heroimage"
              src={urlFor(begravning.image).url()}
            />
          </Segment>
          <Segment>
            <Photo
              alt="hero image"
              className="heroimage"
              id="heroimage"
              src={urlFor(begravning.image2).url()}
            />
            <TextCont>
              <Text2>{begravning.description2}</Text2>
            </TextCont>
          </Segment>
        </SegmentContainer>
      </Container>
    </>
  )
}
export default Begravning

const OuterMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 90vh;
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
  height: 90vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;

  @media screen and (max-width: 1400px) and (min-height: 900px)  { 
    height: 90vh;
    background-size: cover;
  }
  @media screen and (max-width: 1400px) and (min-height: 800px)  { 
    height: 90vh;
    background-size: cover;
  }

  @media screen and (max-width: 1070px)  { 
    height: 90vh;
    background-size: cover;
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
  text-align: flex-start;
  align-items: flex-start;
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
const MiddlePart = styled.div`
  color: white;
  display: flex;
  text-align: left;
  align-items: left;
  font-size: 18px;
  width: 500px;
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
    width: 100%;
    margin-left: 12%;
  }
  @media screen and (max-width: 500px) {
    width: 90%;
    margin-left: 0;

  }
`
