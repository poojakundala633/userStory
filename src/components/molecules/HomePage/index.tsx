import React from 'react'
import MuiTypography from '../../atoms/Typography'
import Button from '../../atoms/Button'
import styled from '@emotion/styled';
import Image from '../../atoms/Image';
import Verify from '../../../assets/Image/verified.gif'


const StyledBox = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 40px;
`;

const HomePage = () => {
  return (
    <StyledBox>
      <Image source={Verify} alt='img' style={{width:"100px", height:"100px"}} ></Image>
      <MuiTypography variant='h6'>Congratulations</MuiTypography>
      <MuiTypography variant='h6'>Mr JaiPal</MuiTypography>
      <MuiTypography variant='h6'>Welcome to HomePage</MuiTypography>
      <Button variant='contained'>Done</Button>
    </StyledBox>
  )
}

export default HomePage
