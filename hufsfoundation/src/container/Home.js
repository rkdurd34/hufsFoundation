import React from 'react';
import styled from 'styled-components';
import Title from '../components/Title';

import Banner from '../images/library1.gif';

const Container = styled.div`
width:100%;
height:50vw;
position:relative;

`;
const Section = styled.div`
width:50vw;
height:24vw;
position:absolute;
left:40%;
top:35%;

background-color:#F5F5F5;
z-index: 999;
box-shadow: 0px 0px 37px 4px rgba(38,38,38,0.72);
pointer-events: auto;



`;
export default function Home() {
  return (
    <Container>
      <Title banner={Banner} />
      <Section>
        
      </Section>
    </Container>
  );
}
