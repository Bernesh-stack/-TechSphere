import React from 'react'
import styled from 'styled-components';
import logo from '../assests/logo.svg'
import Moon from '../assests/Moon.svg';
import profile from '../assests/profile.svg'
import { useNavigate } from 'react-router-dom';
import { useLocation} from 'react-router-dom';


const Navbar = () => {
  const location = useLocation();
const navigate = useNavigate();
const route = ['/']; 
const underine = route.includes(location.pathname);
  return (
<StyledNavbar>
  <LogoContainer>
    <Logo src={logo} />
  </LogoContainer>

  <Spacer />

  <StyledFlex>
    <Home isActive={location.pathname === '/'} onClick={() => navigate('/')}>Home</Home>
 <Events isActive={location.pathname === '/Events'} onClick={() => navigate('/Events')}>
  Events
</Events>
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
const Events = styled.a`
  cursor: pointer;
  position: relative;
  color: white;
  padding-bottom: 4px;



     &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 0;
    background-color: white;
    transition: width 0.3s ease-in-out; 
  }

  ${({ isActive }) =>
    isActive &&
    `
    &::after {
      width: 100%;
    }
  }

  `}
`;


const Home = styled.a`
  cursor: pointer;
  position: relative;
  color: white;
  padding-bottom: 4px;



     &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 0;
    background-color: white;
    transition: width 0.3s ease-in-out; 
  }

  ${({ isActive }) =>
    isActive &&
    `
    &::after {
      width: 100%;
    }
  }

  `}

`
export default Navbar