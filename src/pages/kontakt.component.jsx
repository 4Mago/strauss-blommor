import React, { useContext } from "react"
import styled from "styled-components"
import { KontaktContext } from "../store/kontakt.context"
import imageUrlBuilder from "@sanity/image-url"
import sanityClient from "../Client"

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const Container = styled.div`
  width: 100%;
  height: auto;
  font-size: 36px;
  text-align: center;
  justify-content: center;
  color: #4a1f1f;
  font-family: poppins;
`

const SegmentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`

const Segment = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-flow: column;

  @media screen and (max-width: 500px) {
    flex-flow: column;
  }
`

const Photo = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`
const Title = styled.h2`
  font-size: 36px;
  max-width: 400px;
  text-align: center;

  @media screen and (max-width: 400px) {
    width: auto;
  }
`

const Text = styled.p`
  font-size: 14px;
  max-width: 500px;
  padding: 15px;
  margin: 15px;
  text-align: center;
`

const Kontakt = () => {
  const { kontakt } = useContext(KontaktContext)

  return (
    <>
      <Container>
        <Title>{kontakt.title}</Title>
        <SegmentContainer>
          <Segment>
            <Text>{kontakt.description}</Text>
            <Photo
              alt="hero image"
              className="heroimage"
              id="heroimage"
              src={urlFor(kontakt.image).url()}
            />
            <Text />
          </Segment>
        </SegmentContainer>
      </Container>
    </>
  )
}
export default Kontakt
