import React from 'react';
import styled from 'styled-components';
import Title from '../components/Title';
import Banner from '../images/library2.gif';

const Container = styled.div`
width:100%;
height:50vw;
position:relative;

`;
const Board = styled.div`
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
  width:11vw;
  border-bottom:2px solid #CBCBCB;
  
  padding-bottom:0.5vw;
  font-size: 2.5vw;
  color: #106E79;
  font-weight: bold;
} 
`;
export default function scholarship() {
  return (
    <Container>
      <Title banner={Banner} />
      <BoardTitle>
        <div>장학금지급</div>
      </BoardTitle>
      <Board>
        
      </Board>
    </Container>
  );
};;;
