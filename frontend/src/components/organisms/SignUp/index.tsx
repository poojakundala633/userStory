import React, { useState, useEffect } from 'react';
import CustomTextField from '../../atoms/TextField';
import Button from '../../atoms/Button';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { GetJWTToken, checkUserExists, signUp } from '../../../service/api/api';


const Container = styled.div({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '20px',
  margin: '20px',
});

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userExists, setUserExists] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const jwtToken = localStorage.getItem('jwtToken');

  useEffect(() => {
    if (email) {
      checkUserExists(email, jwtToken)
        .then((userExists) => {
          setUserExists(userExists);
        })
        .catch((error) => {
          console.log('Error:', error);
        });
    }
  }, [email, jwtToken]);

  const handleSignUp = async (e:any) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError('Please set all the fields');
      return;
    }

    try {
      const jwtTokenResponse = await GetJWTToken(email, password);
      localStorage.setItem('jwtToken', jwtTokenResponse);

      const userAlreadyExists = await checkUserExists(email, jwtTokenResponse);

      if (userAlreadyExists) {
        navigate('/login');
        return;
      }

      await signUp(name, email, password, jwtTokenResponse);

      navigate('/login');
    } catch (error) {
      console.error('Error during sign-up:', error);
    }
  };

  const { loginWithRedirect } = useAuth0();

    return (
        <Container>
            <CustomTextField placeholder='Enter your name' label='Name' style={{ width: "450px" }} type='text' value={name} onChange={e => setName(e.target.value)}></CustomTextField>
            <CustomTextField placeholder='Enter your Email' label='Email' style={{ width: "450px" }} type='email' value={email} onChange={e => setEmail(e.target.value)} />
            <CustomTextField placeholder='Enter your Password' label='Password' style={{ width: "450px" }} type='password' value={password} onChange={e => setPassword(e.target.value)} />
            {error && <Typography variant='body1' color='error'>{error}</Typography>} 
            {userExists ? (
              <>
                <Typography variant='body1'>User already exists.</Typography>
                <Button style={{ width: "240px", height: "50px", backgroundColor: "#00cc88" }} onClick={() => navigate('/login')}>Sign In</Button> 
                </>
            ) : (
                <Button style={{ width: "240px", height: "50px", backgroundColor: "#00cc88" }} onClick={handleSignUp}>Sign Up</Button>
            )}
            <Typography variant='h6' color='grey'>OR</Typography>
            <Button style={{ width: "240px", height: "50px", backgroundColor: "#00cc88" }} onClick={() => loginWithRedirect()}>Continue with Google</Button>
        </Container>
    );
}

export default SignUp;
