import React from "react";
import styled from "styled-components";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Section({ title, description, backgroundImg, leftButtonText, rightButtonText, textColor }) {
    return (
        <Wrap bgImage={backgroundImg}>
            <ItemText color={textColor}>
                <h1>{title}</h1>
                <h2>{description}</h2>
            </ItemText>
            <Buttons>
                <ButtonGroup>
                    {leftButtonText &&
                        <LeftButton>
                            {leftButtonText}
                        </LeftButton>
                    }
                    {rightButtonText &&
                        <RightButton>
                            {rightButtonText}
                        </RightButton>
                    }
                </ButtonGroup>
                <ExpandMoreIcon style={{ fontSize: 60, fill: "#FFFFFF", overflowX: "hidden", animation: "animateDown infinite 1.5s" }} />
            </Buttons>
        </Wrap>
    );
}

export default Section;

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => `url("./img/${props.bgImage}")`};
    display: flex;
    color: #111111;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const ItemText = styled.div`
    margin: 0 20px;
    padding-top: 12vh;
    text-align: center;
    color: ${props => `${props.color}`};
`

const Buttons = styled.div`
    text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 20px;
    @media (min-width: 768px) {
        flex-direction: row;
    }
`

const LeftButton = styled.div`
    color: #FFFFFF;
    background-color: #111111;
    height: 40px;
    width: 260px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 0.9em;
    font-weight: 600;
    cursor: pointer;
`

const RightButton = styled(LeftButton)`
    color: #111111;
    background: #FFFFFF;
    opacity: 0.75;
`
