import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
    padding-top: 100px;
    background-color: #273420;
`

const Iframe = styled.iframe`
    width: 100%;
    height: 450px;
    background-color: #273429;
`

const GoogleMaps = () => {
    return (
        <Container>
            <Iframe title='maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2036.0917116016335!2d18.054116715778836!3d59.31472551923593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77e24cc14875%3A0xfbbc17bcffe9fe51!2sStrauss%20blommor%20HB!5e0!3m2!1ssv!2suk!4v1604322819005!5m2!1ssv!2suk" frameborder="0" style={{border:'0;'}} allowfullscreen="" aria-hidden="false" tabindex="0"></Iframe>
        </Container>
    )
}

export default GoogleMaps
