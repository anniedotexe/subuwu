import React from 'react'
import styled from "styled-components";

function Footer() {
    return (
        <FooterText>
            Made with ❤️ and UwU by Annie Wu - <span><a href="https://github.com/anniedotexe/subuwu">Code on GitHub</a></span>
        </FooterText>
    )
}

export default Footer

const FooterText = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;

    a {
        margin-left: 0.2em;
        color: #004890;
        text-decoration: underline;

        :hover {
            color: #B33F62;
        }
    }
`