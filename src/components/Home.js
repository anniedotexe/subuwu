import React from 'react'
import styled from 'styled-components';
import Section from './Section';

function Home() {
    return (
        <Container>
            <Section
                title="Introducing the 2022 Subuwu Outback"
                description="Go where love takes you."
                backgroundImg="outback.jpg"
                leftButtonText="Custom Order"
                rightButtonText="Local Inventory"
                textColor="inherit"
            />
            <Section
                title="The all-new 2022 Subuwu BRZ"
                description="Sports car purity, Subuwu DNA."
                backgroundImg="BRZ.jpg"
                leftButtonText="Custom Order"
                rightButtonText="Local Inventory"
                textColor="inherit"
            />
            <Section
                title="The 2021 Subuwu Forester"
                description="The SUV for all you love."
                backgroundImg="forester.jpg"
                leftButtonText="Custom Order"
                rightButtonText="Local Inventory"
                textColor="inherit"
            />
            <Section
                title="The 2022 Subuwu Legacy"
                description="Love for all the right reasons."
                backgroundImg="legacy.jpg"
                leftButtonText="Custom Order"
                rightButtonText="Local Inventory"
                textColor="inherit"
            />
            <Section
                title="Welcome to Subuwu Motorsports USA"
                description="The U.S. competition arm of Subuwu"
                backgroundImg="motorsports.jpg"
                rightButtonText="Learn More"
                textColor="inherit"
            />
            <Section
                title="Underdogs, overjoyed."
                description="Over 20,000 shelter pets found homes during our 2020 Subuwu Loves Pets Month."
                backgroundImg="pets.jpg"
                leftButtonText="Meet the Underdogs"
                rightButtonText="Find a Participating Retailer"
                textColor="#FFFFFF"
            />
        </Container>
    )
}

export default Home

const Container = styled.div
    `
        height: 100vh;
    `