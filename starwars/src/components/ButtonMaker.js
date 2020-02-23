import React from 'react';
import reactstrap, {Button} from 'reactstrap'
import styled from 'styled-components'

const CustomButton = styled(Button)`
  margin: 20px;
`

const ButtonMaker = (props) => {
    return (
        <div>
          <CustomButton color = "primary" onClick = {() => props.next !== null ? props.setPage(props.page+1) : window.alert('no more pages')}>Next</CustomButton>  
          <CustomButton color = "danger" onClick = {() => props.page !== 1 ? props.setPage(props.page-1) : props.setPage(props.page)}>Prev</CustomButton>
        </div>
    );
};

export default ButtonMaker;