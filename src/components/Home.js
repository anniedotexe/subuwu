import React from 'react'
import styled from 'styled-components';
import Section from './Section';
import Footer from './Footer';


function Home() {
    return (
        <Container>
            <Section
                title="Introducing the 2022 Subuwu Outback"
                description="Go where UwU takes you."
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
                textColor="#FFFFFF"
            />
            <Section
                title="The 2022 Subuwu Legacy"
                description="UwU for all the right reasons."
                backgroundImg="legacy.jpg"
                leftButtonText="Custom Order"
                rightButtonText="Local Inventory"
                textColor="#FFFFFF"
            />
            <Section
                title="The 2021 Subuwu Forester"
                description="The UwU for all you love."
                backgroundImg="forester.jpg"
                leftButtonText="Custom Order"
                rightButtonText="Local Inventory"
                textColor="#FFFFFF"
            />
            <Section
                title="Welcome to Subuwu Motorsports USA"
                description="Subuwu Tecnica International is the touchstone of all Subuwu motorsport and performance vehicles."
                backgroundImg="motorsports.jpg"
                leftButtonText="STI Vehicle Lineup"
                rightButtonText="Learn More"
                textColor="#FFFFFF"
            />
            <Section
                title="More than a car company.®"
                description="The Subuwu Love Promise is our vision to show love and respect to all people at every interaction with Subuwu. Together with our retailers, we are dedicated to making the world an UwU place."
                backgroundImg="love-promise.jpg"
                leftButtonText="Our Causes and Passions"
                rightButtonText="Learn More"
                textColor="#FFFFFF"
            />
            <Section
                title="Underdogs, overjoyed."
                description="Over 20,000 UwU shelter pets found homes during our 2020 Subuwu Loves Pets Month."
                backgroundImg="pets.jpg"
                leftButtonText="Meet the Underdogs"
                rightButtonText="Find a Participating Retailer"
                textColor="#FFFFFF"
            />
            <Footer />
        </Container>
    )
}

export default Home

const Container = styled.div`
        height: 100vh;
    `