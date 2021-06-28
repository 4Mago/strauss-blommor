import React from 'react'
import './the-big-file.css'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 200px;
  align-items: center;
  height: 80%;
  width: 100%;
  text-indent: 4em 4em;
  grid-template-rows: 1fr;
  align-items: center;
  text-align: center;
  color: #EEE1E1;
  font-size: 20px;
  z-index: 999;
`

function GreetingText() {

  return (
    <div>
      <Container>
        <div className='greeting-background'>
          <div className='greeting-text' id='h1' data-speed='1'>

            <div className='parallax-title'>
              <h2> Skicka blommor med oss!</h2> </div>
            <p>
              <div className='parallax-title'>
                Vi älskar gröna växter (både traditionella och lite annorlunda), <br></br> vilda säsongsbuketter och lite godbitar inom present och inredning.
                <br>
                </br>Strauss Blommor ligger på Rosenlundsgatan 32 C på Södermalm i <br></br> Stockholm (pendel Södra station/t-bana Mariatorget).
              </div>
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default GreetingText