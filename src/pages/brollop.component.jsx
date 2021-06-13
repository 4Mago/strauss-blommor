import React, { useEffect, useState } from "react"
import styled from "styled-components"
import imageUrlBuilder from "@sanity/image-url"
import sanityClient from "../Client"
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BrollopCont from "../components/bröllop/brollopCont"


const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const HomeCarousel = styled(Carousel)`
  height: 100vh;
  width: 100%;
  font-size: 40px;
.slide iframe {
    margin: 0 !important;
    width: 100% !important;
    min-height: 100vh;
  }
  .carousel-slider .control-arrow {
    padding: 20px !important;
  }
  @media only screen and (max-width: 800px) {
  }
`

const Title = styled.p`
  font-size: 32px;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media only screen and (max-width: 600px) {
    font-size: 20px;
    width: 74vw;
  }
`

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  @media screen and (max-width: 700px) {
    padding-bottom: 0;
  }
  .carousel.carousel-slider  {
    height: 100%;
    }

  .carousel{
    height: 0;
  }
`

const HeaderImage = styled.div`
	width: 100%;
	height: 100vh;
	position: relative;
  background-color: black;
	@media only screen and (max-width: 800px) {
	}
`

const Thumbnail = styled.div`
	width: 100%;
	height: 100vh;
	background-repeat: no-repeat;
	background-size: cover;
	position: absolute;
  opacity: 0.6;
	left: 0;
	top: 0;
	z-index: 0;
	@media only screen and (max-width: 800px) {
	}
`

const ContCont = styled.div`
position: relative;
top: 0;
left: 0;
bottom: 0;
height: 100%;
width: 100%;
overflow-x: hidden;
`

const Brollop = () => {
  const [brollop, setBrollop] = useState("")
  
  useEffect(() => {
      const brollopQuery = `*[_type == "brollop"]`
      sanityClient.fetch(brollopQuery).then((brollop) => {
        const brollopArray = []
        brollop.forEach((brollop) => {
          brollopArray.push(brollop)
        })
        setBrollop(brollopArray)
      })
      return
    }, [])

const settings = {
    autoPlay: true,
    showArrows: true,
    showThumbs: true,
    interval: 6000,
    infiniteLoop: true,
    showStatus: false,
    transitionTime: 1000,
    stopOnHover: false,
  }

  return (
    <>
    <ContCont>
    <HomeContainer id="Home">
    {brollop.length > 0 ? (
        <HomeCarousel {...settings}>
          {brollop.map((brollopItem, idx) => {
            return(
                <>
            <HeaderImage>
              <Thumbnail 
                style={{ backgroundImage: `url(${urlFor(brollopItem.heroImage).quality(80).auto('format').url()})` }}
                key={idx}
                slider={brollopItem}
              />
              <Title>{brollopItem.title}</Title>
            </HeaderImage>
            </>
          )})}
        </HomeCarousel>
    )
    : null }
    </HomeContainer>
    <BrollopCont />
    </ContCont>
    </>
  )
}

export default Brollop