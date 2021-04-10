import React from 'react';
import Summernote from '../components/Summernote';
import { Link } from 'react-router-dom';
import Banner from '../images/library3.gif';
import Title from '../components/Title';
import styled from 'styled-components';

const Container = styled.div`
width:100%;
min-height:50vw;
background-color:#F5F5F5;
`;
const BoardTitle = styled.div`
width:70%;
height:10vw;
margin: auto;
display:flex;
align-items:center;
align-content:center;
div{
  width:12vw;
  border-bottom:2px solid #CBCBCB;
  padding-bottom:0.5vw;
  font-size: 2.5vw;
  color: #106E79;
  font-weight: bold;
} 

`;
const Section = styled.div`
width:100%;
background-color:#F5F5F5;

`;

export default function CreatePost(props) {

  return (
    <Container>
      <Title banner={Banner} />
      <Section>
        <BoardTitle>
          <div>게시물 작성</div>
        </BoardTitle>
        <Summernote props={props} />
      </Section>
    </Container>

  );
};;;
