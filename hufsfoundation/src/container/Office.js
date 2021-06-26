import React from 'react';
import styled from 'styled-components';
import Title from '../components/Title';
import { Link } from 'react-router-dom';
import Banner from '../images/library3.gif';
import Forum from '../components/Forum';

const Container = styled.div`
width:100%;
min-height:50vw;
background-color:#F5F5F5;
`;
const ButtonSection = styled.div`
width:77%;
margin:auto;
display:flex;
justify-content:center;

button{
  margin: 2vw;
  /* border-top: 0.5px solid #DCDCDC; */
  background:#106E79;
  color:#fff;
  border:none;
  position:relative;
  width:25vw;
  height:6vw;
  /* font-size:1.6em; */
  padding:0 2em;
  cursor:pointer;
  transition:800ms ease all;
  outline:none;
  letter-spacing:0.1vw;
  /* border-radius:100px; */
  font-size: 2vw;
}
button:hover{
  background:#fff;
  color:#106E79;
}
button:before,button:after{
  content:'';
  position:absolute;
  top:0;
  right:0;
  height:2px;
  width:0;
  background: #106E79;
  transition:400ms ease all;
}
button:after{
  right:inherit;
  top:inherit;
  left:0;
  bottom:0;
}
button:hover:before,button:hover:after{
  width:100%;
  transition:800ms ease all;
}
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
export default function Office() {
  return (
    <Container>
      <Title banner={Banner} />
      <Section>
        <BoardTitle>
          <div>
            <span>
              감독기관
            </span>
          </div>
        </BoardTitle>
        <ButtonSection>
          <a href="https://www.nts.go.kr"><button>국세청</button></a>
          <a href="https://www.sen.go.kr"><button>서울시교육청</button></a>
        </ButtonSection>

      </Section>
    </Container >
  );
}
