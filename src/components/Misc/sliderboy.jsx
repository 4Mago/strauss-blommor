import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import sanityClient from '../../Client'
import { CarouselProvider, Slider, ButtonBack, Slide, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import imageUrlBuilder from '@sanity/image-url'




const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
    return builder.image(source)
}

const ContCont = styled.div`
height: 70vh;
    width: 100%;
    background-color: #273420;
`

const StyledContainer = styled.div`
    width: 90%;
    height: 50vh;
    margin: 0 5% 10% 5%;
    padding-top: 5%;
    position: relative;

    @media screen and (max-width: 800px){
        width: 70%;
        margin: 35px 15% 5px 15%;
        height: 20vh;
    }
`


const SliderBilderLogo = styled.img`
    width: 97%;
    border-radius: 20px;
    margin: 0;
    margin-top: 25px;
    background-size: contain;
    max-height: 1000px;
`

const SliderCont = styled.div`
    height: 100%;
    position: relative;
`

const H1 = styled.h1`
padding-left: 40%;
color: white;
`


const SliderBilder = () => {
    const [sliderBilder, setSliderBilder] = useState('')
    useEffect(() => {
        const sliderBilderQuery = `*[_type == "sliderbilder"]`
        const sliderBilderArray = []
        sanityClient.fetch(sliderBilderQuery).then(sliderBilder => {

            sliderBilder.forEach(sliderBilder => {
                sliderBilderArray.push(sliderBilder)
            })
            setSliderBilder(sliderBilderArray)
        })
        return
    }, [])

    return (
        <ContCont>
            <StyledContainer className="client-container">
                <CarouselProvider className="carousel-desktop"
                    naturalSlideWidth={10}
                    naturalSlideHeight={1000}
                    totalSlides={sliderBilder.length}
                    visibleSlides={4}
                    infinite={true}
                    step={3}
                >
                    <SliderCont style={{ height: '1000px' }}>
                        <H1>Bli inspirerad</H1>
                        <Slider style={{ height: '1000px' }}>
                            {sliderBilder.length > 0 ?
                                sliderBilder.map((item, index) => {
                                    return (
                                        <Slide >
                                            <a href='https://instagram.com/straussblommor'>
                                                <SliderBilderLogo
                                                    key={index}
                                                    src={urlFor(item.image1).url()}
                                                />
                                            </a>
                                        </Slide>
                                    )
                                })
                                : null}
                        </Slider>
                        <ButtonBack style={{ border: '0', opacity: '0.3', position: 'absolute', left: '-55px', top: '20%', borderRadius: '50%', width: '30px', height: '30px' }} ><img style={{ width: '15px', paddingTop: '4px', paddingRight: '3px' }} alt="back" src="./back.svg" /></ButtonBack>
                        <ButtonNext style={{ border: '0', opacity: '0.3', position: 'absolute', right: '-55px', top: '22%', borderRadius: '50%', width: '30px', height: '30px' }} ><img style={{ width: '15px', paddingTop: '4px', paddingLeft: '3px' }} alt="next" src="./next.svg" /></ButtonNext>
                    </SliderCont>
                </CarouselProvider>
            </StyledContainer>
        </ContCont>
    )
}

export default SliderBilder
