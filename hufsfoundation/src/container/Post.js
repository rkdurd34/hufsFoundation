import React from 'react';
import styled from 'styled-components';
import Title from '../components/Title';
import Banner from '../images/library3.gif';
import Forum from '../components/Forum';
import PostDetail from '../components/PostDetail';

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
  font-size: 3vw;
  border-bottom: 2px solid #106e79;
  letter-spacing: 0.1vw;
}
`;
export default function Board(props) {
  console.log(props.match);
  console.log(props);
  return (
    <Container>
      <Title banner={Banner} />
      <PostDetail params={props.match.params} />
      {/* <Section>
        <BoardTitle>
          <div></div>
        </BoardTitle>
        <Forum />
      </Section> */}
    </Container>
  );
}
