import React, { useContext } from "react"
import styled from "styled-components"
import { KontaktContext } from "../store/kontakt.context"
import imageUrlBuilder from "@sanity/image-url"
import sanityClient from "../Client"
import SliderBilder from "../components/Misc/sliderboy2"

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const Container = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
  justify-content: center;
  color: #fff;
  font-family: poppins;
  padding-top: 100px;
  z-index: 9999999;

`

const SegmentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-flow: column;
  padding-top: 100px;
  position: sticky;
  top: 40px;
`

const Segment = styled.div`
  width: 93%;
  height: 100%;
  padding: 15px;
  z-index: 9999999;

  @media screen and (max-width: 700px) {
    flex-flow: column;
    padding: 0 15px;

  }
`

const Photo = styled.img`
  width: auto;
  height: 800px;
  object-fit: fill;
  outline: 15px solid black;
  z-index: 9999999;
  box-sizing: border-box;

  @media screen and (min-width: 1400px) {
    transform: translate(60%, -0%);
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    padding: 5px;
  }
`
const Title = styled.h2`
  font-size: 26px;
  max-width: 450px;
  text-align: center;
  color: white;
  margin: 0 45px;


  @media screen and (max-width: 400px) {
    width: auto;
    margin: 0;
    font-size: 26px;

  }
`

const Text = styled.p`
  font-size: 14px;
  text-align: left;
  padding: 45px;
  max-width: 700px;


  @media screen and (max-width: 1100px) {
    max-width: 450px;
    padding: 15px;
    font-size: 12px;

  }
`

const Kontakt = () => {
  const { kontakt } = useContext(KontaktContext)

  return (
    <>
      <Container>

        <OuterMain>
          <HeaderImage
            alt="hero image"
            className="heroimage"
            id="heroimage"
            style={{ backgroundImage: `url(${urlFor(kontakt.heroImage).url()})` }}
          />
          <ColorShade />
          <MainInner>
            <MiddleText>
              <MiddlePart2>{kontakt.title}</MiddlePart2>
              <MiddlePart>{kontakt.description}</MiddlePart>
            </MiddleText>
          </MainInner>
        </OuterMain>

        <SegmentContainer>
          <Segment>
            <SegmentContainer>
              <Title> Kom i kontakt med oss!</Title>
              <Text>{kontakt.description2}</Text>
            </SegmentContainer>
            <Photo
              alt="hero image"
              className="heroimage"
              id="heroimage"
              src={urlFor(kontakt.image).url()}
            />
          </Segment>
          <SliderBilder />
        </SegmentContainer>
      </Container>
    </>
  )
}
export default Kontakt


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
  opacity: 34%;
  z-index: 10;
`


const MainInner = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
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
const MiddlePart = styled.div`
  color: white;
  display: flex;
  text-align: left;
  align-items: left;
  font-size: 16px;
  max-width: 450px;
  position: sticky;
  top:0;
  right: 0;

  @media screen and (max-width: 700px) {
    font-size: 13px;
  }
`

const MiddlePart2 = styled.h2`
  color: white;
  display: flex;
  text-align: left;
  align-items: left;
  font-size: 26px;
  width: 350px;
  margin-top: 15px;
  z-index: 999;

  @media screen and (min-width: 1100px) {
    width: 75%;
    font-size: 36px;
  }
  @media screen and (max-width: 500px) {
    max-width: 350px;

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
  border-radius: 50%;
  background-color: #1d2724;
  padding: 50px;
  max-width: 450px;




  @media screen and (max-width: 900px) {
    width: 100%;
    max-width: 400px;

    margin-left: 12%;
  }
  @media screen and (max-width: 500px) {
    width: 90%;
    margin-left: 0;

  }
`
