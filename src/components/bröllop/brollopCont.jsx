import React, { useContext } from 'react'
import styled from 'styled-components'
import imageUrlBuilder from "@sanity/image-url"
import sanityClient from "../../Client"
import { BrollopContext } from '../../store/brollop.context'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const BrollopCont = () => {
  const { brollop } = useContext(BrollopContext)

  return (

    <Container>
      <Header>{brollop.title}</Header>
      <SegmentContainer>
        <Segment>
          <Photo
            alt="hero image"
            className="heroimage"
            id="heroimage"
            src={urlFor(brollop.image).url()}
          />
          <TextCont>
            <Text>{brollop.description}</Text>
          </TextCont>
        </Segment>
        <Segment>
          <TextCont>
            <Text>{brollop.description2}</Text>
          </TextCont>

          <Photo
            alt="hero image"
            className="heroimage"
            id="heroimage"
            src={urlFor(brollop.image2).url()}
          />
        </Segment>
      </SegmentContainer>
    </Container>
  )
}

export default BrollopCont

const Container = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 5%;
  color: #fff;
  font-family: poppins;
  padding-top: 135px;


  h1 {
    padding-top: 35px;
  }
  margin-bottom: 100px;
`

const SegmentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column;
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
const TextCont = styled.div``
const Text = styled.p`
  box-sizing: border-box;

  width: 100%;
  padding: 10%;
  text-align: center;
`
const Header = styled.h2`
  font-size: 36px;
`

