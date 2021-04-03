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
export default function IntroScreen() {
  return (
    <Container>
      <Title banner={Banner} />
      <Board>

      </Board>
    </Container>
  );
}
