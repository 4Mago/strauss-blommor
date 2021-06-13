import React from 'react'
import styled from 'styled-components'

const OpenHours = () => {
    return (
        <Container>
        <ImageContainer>
        <Icon src="/images/henock_inkoner_05.png" alt=""></Icon>
        <h4>  Öppettider </h4>
        Måndag - Fredag 10.00 - 18.30
        <br/>  Lördag 10.00 - 16.00
        <br/>  Söndag - Stängt
        </ImageContainer>
        <ImageContainer>
        <Icon src="/images/henock_inkoner_04.png" alt=""></Icon>
        <h4 className="page__info--title">Vår Butik </h4>
        Strauss Blommor ligger på Södermalm i Stockholm <br/> (Södra station uppgång Rosenlundsgatan).
        </ImageContainer>
        <ImageContainer>
        <Icon src="/images/henock_inkoner_02.png" alt=""></Icon>
        <h4 className="page__info--title">Kontakt</h4>
       <p>Du kan nå oss via <a href='mailto:info@straussblommor.se'>E-post</a><br />
        Eller ringa på <a href='tel:08-209840'>08-20 98 40</a></p>
        </ImageContainer>
        </Container>
)
}

export default OpenHours


const Container = styled.div`
    opacity: 1; 
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: poppins;
    background-color: #273420;
    height: 70vh;

    @media screen and (max-width: 700px) {
        display: flex;
        flex-direction: column;
    }
    `

const ImageContainer = styled.div`
    display: flex;
    width: 300px;
    height: 300px;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    gap: 10px;
    color: white;
    text-align: center;
`

const Icon = styled.img`
    width: 100px;
    transition: .5s;
    z-index: 2;
`