import React from 'react';
import styled from 'styled-components';
import Title from '../components/Title';
import Banner from '../images/library3.gif';
import Forum from '../components/Forum';

const Container = styled.div`
width:100%;
min-height:50vw;
position:relative;
background-color:#F5F5F5;
`;
const Section = styled.div`
width:100%;
background-color:#F5F5F5;

`;
const BoardTitle = styled.div`
width:77%;
height:10vw;
margin: auto;
display:flex;
align-items:center;
align-content:center;
div{
  width:8.7vw;
  border-bottom:2px solid #CBCBCB;
  
  padding-bottom:0.5vw;
  font-size: 2.5vw;
  color: #106E79;
  font-weight: bold;
   
}
`;
export default function Board() {
  return (
    <Container>
      <Title banner={Banner} />
      <Section>
        <BoardTitle>
          <div>정보공개</div>
        </BoardTitle>
        <Forum />
      </Section>
    </Container>
  );
}
