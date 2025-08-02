import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
const Container = styled.div`
  height: 100vh;
  background-color: #111;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  color: white;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 600;
`;

const SocialButton = styled.button`
  width: 100%;
  padding: 0.9rem;
  border-radius: 999px;
  background-color: #e6e6e6;
  color: #000;
  font-weight: 600;
  border: none;
  margin-bottom: 1.5rem;
  cursor: pointer;
`;

const Separator = styled.div`
  text-align: center;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  opacity: 0.6;
`;

const Input = styled.input`
  background-color: #2b2b2b;
  border: none;
  border-radius: 12px;
  padding: 0.9rem 1rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: white;
  outline: none;

  &::placeholder {
    color: #aaa;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 0.85rem;
  background-color: #2b2b2b;
  color: white;
  border: none;
  border-radius: 999px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  margin-top: 0.5rem;
`;

const SmallLink = styled.a`
  display: inline-block;
  font-size: 0.85rem;
  color: #aaa;
  margin-top: 0.5rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const BottomText = styled.div`
  margin-top: 1.5rem;
  font-size: 0.85rem;
  text-align: center;
  color: #aaa;

  a {
    color: #ccc;
    text-decoration: none;
    margin-left: 5px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const LoginForm = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Card>
        <Title>Welcome to TechSphere</Title>


        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />

        <LoginButton>Log in</LoginButton>

        <BottomText>
          Don’t have an account?
          <a onClick={()=> navigate('/signup')}>Sign up</a>
        </BottomText>
      </Card>
    </Container>
  );
};

export default LoginForm;
