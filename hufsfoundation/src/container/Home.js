import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Title from '../components/Title';

import Banner from '../images/library1.gif';
import {
    InfoCircleOutlined,
    DatabaseOutlined,
    CopyOutlined, BankOutlined
} from '@ant-design/icons';
const Container = styled.div`
width:100%;
min-height:25vw;
position:relative;
background-color:#F1F1F1;

`;
const Section = styled.div`
width:50vw;
height:20vw;
background-color:#F1F1F1;
width: 100%;
z-index: 100;
/* box-shadow: 0px 0px 37px 4px rgba(38,38,38,0.72); */
pointer-events: auto;

display:flex;
flex-wrap:wrap;
justify-content:center;
align-items:center;
align-content:center;
a{
  svg{
    font-size: 2vw;
    margin-right: 1vw;
  }
  width:20%;
  height:30%;
  margin:0.5vw;
}
.myButton {
  width:100%;
  height:100%;
  
  border:1px solid black;
  z-index: 103;
	box-shadow:inset 0px 0px 0px -20px #ffffff;
	background:linear-gradient(to bottom, #f9f9f9 5%, #e9e9e9 100%);
	background-color:#f9f9f9;
	border-radius:2px;
	border:2px solid #dcdcdc;
	display:inline-block;
	cursor:pointer;
	color:#666666;
	font-family:Arial;
	font-size:2vw;
	font-weight:bold;
	/* padding:22px 46px; */
	text-decoration:none;
	
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius: 20px;
  font-size:1.5vw;
}
.myButton:hover {
	background:linear-gradient(to bottom, #e9e9e9 5%, #f9f9f9 100%);
	background-color:#e9e9e9;
  color:#549daa;
}
.myButton:active {
	position:relative;
	top:3px;
}


`;
export default function Home() {
    return (
        <Container>
            <Title banner={Banner} />
            <Section>
                <Link to={'/intro'}><div className="myButton"><InfoCircleOutlined />장학회 소개</div></Link>
                <Link to={'/scholarship'}><div className="myButton"><CopyOutlined />장학금 지급</div></Link>
                <Link to={'/board'}>
                    <div className="myButton">
                        <DatabaseOutlined />
                        정보공개
                    </div>
                </Link>
                <Link to={'/office'}><div className="myButton">
                    <BankOutlined />
                    감독기관
                </div></Link>
            </Section>
        </Container>
    );
}
