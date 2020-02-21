import React from 'react';
import styled from 'styled-components'

let StyledFooter = styled.footer`
   font-size: 1.5rem;
   color: blue;
   background:white;
   font-weight: bold;
   margin-top: 40px;
`

const Footer = () => {
    return (
        <footer>
           <StyledFooter>Starwars Copyright&copy; 1978</StyledFooter> 
        </footer>
    );
};

export default Footer;