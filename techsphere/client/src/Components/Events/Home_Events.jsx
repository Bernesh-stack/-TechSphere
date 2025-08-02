import React from 'react'
import styled from 'styled-components'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Home_Events = ({image,title,platform,date}) => {
 
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,    
    });
  }, []);
  return (
    <Events data-aos="fade-up ">
        <CardEvent src={image} alt={"basic events"}></CardEvent>
<CardContent >


        <Title>{title}</Title>
        <Platform>{platform}</Platform>
        <Date>{date}</Date>

</CardContent>
        

    </Events>
  )
}
const Events = styled.div`
  background-color: #1e1e1e;
  border-radius: 10px;
  width: 12rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    transform: scale(1.1); 
    cursor: pointer;
  }
`;

const CardEvent = styled.img`
    width: 100%;
    height :7rem;
    object-fit: cover;
    
`
const CardContent = styled.div`
     padding: 0.75rem; 
`
const Title = styled.h3`
  color: white;
  font-size: 0.875rem; 
  font-weight: 600; 
`;

const Platform = styled.p`
  color: #9ca3af; 
  font-size: 0.75rem; 
`
const Date = styled.p`
  color: #6b7280; 
  font-size: 0.75rem; 
  margin-top: 0.25rem; 
`;

export default Home_Events