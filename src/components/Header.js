import React, { useState } from 'react';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

import styled from "styled-components";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';


function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars);

    return (
        <Container>
            <div class="logo-container">
                <a href="/">
                    <img src="./img/logo.svg" alt="" />
                </a>
            </div>
            <Menu>
                {cars && cars.map((car, index) => (
                    <li>{car}</li>
                ))}
            </Menu>
            <RightMenu>
                <li>Shop</li>
                <li>Account</li>
                <MenuButton onClick={() => setBurgerStatus(true)} />
            </RightMenu>
            <BurgerNavMenu show={burgerStatus}>
                <CloseContainer>
                    <CloseButton onClick={() => setBurgerStatus(false)} />
                </CloseContainer>
                {cars && cars.map((car, index) => (
                    <li>{car}</li>
                ))}
                <li>All Vehicles</li>
                <li>Certified Pre-Owned</li >
                <li>Future Vehicles & Concepts</li >
                <li>Build & Price</li >
                <li>Compare Vehicles</li >
                <li>Local Inventory</li >
                <li>Special Offers</li >
                <li>View a Brochure</li >
            </BurgerNavMenu >
        </Container >
    )
}

export default Header

const Container = styled.div`
            padding: 0 20px;
            min-height: 60px;
            inset: 0 0 auto 0;
            position: fixed;
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 1;

            .logo-container, .logo-container a {
                width: 200px;
            }
            `

const Menu = styled.div`
    display: none;

    li {
        padding: 0 10px;
        font-weight: 600;
        text-transform: uppercase;
        flex-wrap: no-wrap;
        cursor: pointer;
        transition: .2s ease;

        :hover {
            color: #004890;
        }
    }

    @media (min-width: 768px) {
        display: flex;
            align-items: center;
            justify-content: center;
            flex: 1;
        }
    `

const RightMenu = styled.div`
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;
    gap: 20px;

    li {
        font-weight: 600;
        text-transform: uppercase;
        flex-wrap: no-wrap;
        transition: .2s ease;

        :hover {
            color: #004890;
        }
    }
`

const MenuButton = styled(MenuIcon)`
    cursor: pointer;
`

const BurgerNavMenu = styled.div`
    padding: 20px;
    position: fixed;
    inset: 0 0 0 auto;
    width: 300px;
    z-index: 2;
    background: #FFFFFF;
    list-style: none;
    display: flex;
    flex-direction: column;
    text-align:
    justify-content: flex-start;

    transform: ${props => props.show ? `translateX(0)` : `translateX(100%)`};
    transition: transform .2s ease-in;

    li {
        font - weight: 600;
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .1);
        cursor: pointer;
        transition: .2s ease;

        :hover {
            color: #004890;
        }
    }
`


const CloseContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`

const CloseButton = styled(CloseIcon)`
    cursor: pointer;
`