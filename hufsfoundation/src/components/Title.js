import React from 'react';
import styled from 'styled-components';
import Banner from '../images/library1.gif';
const Container = styled.div`
width:100%;

box-shadow:0px 0px 37px 4px rgba(38,38,38,0.43);

img{
  opacity:70%;
  

}
`;

const Title = () => {
  return (
    <Container>
      <img src={Banner} alt="타이틀" width="100%" />
    </Container>
  );
};

export default Title;