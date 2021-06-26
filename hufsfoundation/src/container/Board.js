import React from 'react';
import styled from 'styled-components';
import Title from '../components/Title';
import Banner from '../images/library3.gif';
import Forum from '../components/Forum';

const Container = styled.div`
width:100%;
min-height:50vw;
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
  width:100%;
  span{
    border-bottom:2px solid #CBCBCB;
    padding-bottom:0.5vw;
    font-size: 2.5vw;
  color: #106E79;
  font-weight: bold;

  }
  
}
`;
export default function Board() {
  return (
    <Container>
      <Title banner={Banner} />
      <Section>
        <BoardTitle>
          <div>
            <span>
              정보공개
            </span>
          </div>
        </BoardTitle>
        <Forum />
      </Section>
    </Container>
  );
}
