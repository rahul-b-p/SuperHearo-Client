import React, { useState } from 'react';
import Dinkan from '../assets/img/dinkan-hero.png'
import { Container } from 'react-bootstrap';




function Home() {

    return (
        <>
            <Container fluid className='main hero flex-column transparent-background' >
                <img src={Dinkan} alt="no image" />
            </Container>

        </>
    )
}

export default Home