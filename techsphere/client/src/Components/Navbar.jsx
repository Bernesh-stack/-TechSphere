import React from 'react'
import styled from 'styled-components';
import logo from '../assests/logo.svg'
import Moon from '../assests/Moon.svg';
import profile from '../assests/profile.svg'
const Navbar = () => {

  return (
<StyledNavbar>
  <LogoContainer>
    <Logo src={logo} />
  </LogoContainer>

  <Spacer />

  <StyledFlex>
    <p>Events</p>
    <Icon src={Moon} alt="moon" />
    <UserLogo>
      <img src={profile} alt="user" />
    </UserLogo>
  </StyledFlex>
</StyledNavbar>

  )
}
const StyledNavbar = styled.div`
  display: flex;
  align-items: center;
  background-color: black;
  color: white;
  height: 60px;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;

  z-index: 1;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Spacer = styled.div`
  flex: 1; 
`;

const Logo = styled.img`
  height: 30px;
`;

const StyledFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const UserLogo = styled.div`
  width: 40px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff1a;
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &:hover {
    background-color: #ffffff33;
  }

  img {
    width: 24px;
    height: 24px;
  }
`;

export default Navbar