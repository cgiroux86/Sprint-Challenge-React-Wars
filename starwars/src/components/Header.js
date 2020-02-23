import React from 'react';
import styled from 'styled-components'

const H1 = styled.h1`
 color: red;
 font-size: 3rem;
 font-weight: bold;
 text-decoration: underline;
`

const Header = () => {
    return (
        <div>
          <H1>React Wars</H1>  
        </div>
    );
};

export default Header;