import React, { useState } from 'react';
import MuiTypography from '../../atoms/Typography'
import CustomTextField from '../../atoms/TextField'
import Button from '../../atoms/Button';
import styled from '@emotion/styled';
import userData from '../../../Constants';
import { useNavigate } from 'react-router-dom';
const StyledBox = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 40px;
`;

const CustomField = styled.div`
    padding: 20px;
`

const Otp: React.FC = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [verificationStatus, setVerificationStatus] = useState('');
  const navigate = useNavigate();
  const handleOtpChange = (index: number, value: string) => {

    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  const handleVerify = () => {

    const enteredOtp = otp.join('');
    const user = userData.users.find((user) => user.otp === enteredOtp);

    if (user) {
      setVerificationStatus('OTP Verified!');
      navigate('/homepage');
    } else {
      setVerificationStatus('Invalid OTP. Please try again.');
    }
  };

  return (
    <StyledBox>
      <MuiTypography variant='h4' style={{color:"grey"}}>Verification Code</MuiTypography>
      <MuiTypography variant='h6'  style={{color:"grey"}}>Please enter the verification code sent to +91 8976543211</MuiTypography>
      <CustomField>
        {otp.map((digit, index) => (
          <CustomTextField
            key={index}
            style={{ width: '50px', textAlign: 'center' , margin:"20px" , color: "white"}}
            value={digit}
            onChange={(e) => handleOtpChange(index, e.target.value)}
            maxlength={1}
          />
        ))}
      </CustomField>
      {verificationStatus && <div>{verificationStatus}</div>}
      <MuiTypography variant='h6'  style={{color:"grey" ,textDecoration:"underline" , cursor:"pointer"}}> Didn't recieve an Otp</MuiTypography>
      <MuiTypography variant='h6'  style={{color:"grey"}}> Resend OTP</MuiTypography>
      <Button onClick={handleVerify} variant='contained'>Submit</Button>
    </StyledBox>
  );
};

export default Otp;
