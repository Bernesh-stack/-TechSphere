import React from 'react'
import styled from 'styled-components'
import BG from '../assests/BG.png'
import Home_Events from '../Components/Events/Home_Events'
import img1 from '../assests/img1.webp'
import img2 from '../assests/img-2.webp'
import img3 from '../assests/img-3.jpg'
const Home = () => {
  var arr = [{id:1,image:img1,title:"Innoviate the Future",platform:"Linkedin",date:"14-july-2023"},{id:2,image:img2
    ,title:"Innoviate the Future",platform:"Linkedin",date:"14-july-2023"},{id:3,image:img3,title:"Innoviate the Future",platform:"Linkedin",date:"14-july-2023"},{id:4,image:BG,title:"Innoviate the Future",platform:"Linkedin",date:"14-july-2023"},{id:5,image:BG,title:"Innoviate the Future",platform:"Linkedin",date:"14-july-2023"}];
  return (
    <div>
<DiscoverCard>
  <DiscoverHeading>Discover Top Tech Events</DiscoverHeading>
  <SearchContainer>
    <SearchInput type="text" placeholder="Search for events" />
    <SearchButton>Search</SearchButton>
  </SearchContainer>
</DiscoverCard>
{/* <Events /> displaying top 5 eventsn */}
<div>
  <Eventtitle>Upcoming events</Eventtitle>
<Events>

  {arr.map((item) =>{
    return(
      <Home_Events image={item.image} title={item.title} platform={item.platform} date={item.date} key={item.id}></Home_Events>
    )
  } )}

</Events>
</div>



</div>
  
  )
}
export const DiscoverCard = styled.div`
  background-image: url(${BG});
  background-size: cover;
  padding: 3rem 2rem;
  margin-top: 0%;
  width: 100%;
  height: 400px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  
  


`;

export const DiscoverHeading = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1.5rem;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1e1e1e;
  padding: 0.5rem;
  border-radius: 12px;
  width: fit-content;
  margin: 0 auto;
`;

export const SearchInput = styled.input`
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  width: 300px;
  display: flex;

  ::placeholder {
    color: #aaa;
  }
`;

export const SearchButton = styled.button`
  background: #fff;
  color: #000;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.25rem;
  font-weight: 600;
  margin-left: 0.5rem;
  cursor: pointer;
  transition: background 0.3s;
  display: flex;

  &:hover {
    background: #e0e0e0;
  }




`
const Events = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-around;

 
  margin-top: 10px;
`

const Eventtitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1b1919;
  margin-bottom: 1.5rem;
  margin-top: 1px;
  padding-left: 10px;
`



export default Home