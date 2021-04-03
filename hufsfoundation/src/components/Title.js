import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
width:100%;

box-shadow:0px 0px 37px 4px rgba(38,38,38,0.43);
z-index:10000;
img{
  opacity:100%;
  z-index:10000;
  
  

}
`;

const Title = ({ banner }) => {
  return (
    <Container>
      <img src={banner} alt="타이틀" width="100%" />
    </Container>
  );
};

export default Title;