import React from 'react'
import styled from 'styled-components'

 const Home = () => {
  return  <Wrapper className='test'>Home</Wrapper>
 };

  const Wrapper=styled.section` 
    background-color:${({theme})=> theme.colors.bg};
    // background-color:red;
     width: 200 rem;
      height: 200 rem;

`;

export default Home;
