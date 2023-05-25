import React from 'react'
import '../../App.css'
import { Container, Typography } from '@material-ui/core'
import Carousel from './Carousel'

function Banner() {
  return (
    <div className='banner'>
      <Container className='bannerContent'>
        <div className='tagline'>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            Crypto Hunter
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Get all the Info regarding your favorite Crypto Currency
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  )
}

export default Banner