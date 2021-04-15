

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo1 from '../images/logo2.jpg';

const Container = styled.div`
width: 100%;
height:8vw;
background-color:white;
display:flex;

.first{
  width:50%;
  height:100%;
  display:flex;
  align-items:center;
  img{
    width:40%;
    margin-left:10%;
  }

}
.second{
  width:50%;
  height:100%;
  font-size: 1vw;
  display:flex;
  justify-content:center;
  align-items:center;
  align-content:center;
  ul{
    display:flex;
    align-items:center;
    margin-left:4vw;
    width: 100%;
    margin-bottom:0px;

  }
  ul li{
    font-weight:bold;
    font-size:1.3vw;
    letter-spacing:0.05vw;
    padding:0 3% 0 3%;
    list-style:none
  }
  ul li a:hover{
    color:#549daa;
  }
}
`;

const Header = () => {
  return (
    <React.Fragment>
      <Container>
        <div className="first">

          <Link to="/"><img src={logo1} alt="logo" /></Link>

        </div>
        <div className="second">
          <ul>
            <li><Link to="/intro">장학회소개</Link></li>
            <li><Link to="/scholarship">장학금지급</Link></li>
            <li><Link to="/board">정보공개</Link></li>
            <li><Link to="/office">감독기관</Link></li>
          </ul>
        </div>
      </Container>
      {/* <div className="header">
        <Link to="/" className="logo"><img src={'a'} alt="logo" width='30%'></img></Link>
        <ul className="menu">
          <li className="menu1"><Link to="/programs">진행중인 프로그램</Link>
            <ul className="submenu submenu1">
              <li><Link to="/programs">프로그램 소개</Link></li>
              <li><Link to="/mento">멘토 풀 소개</Link></li>
              <li><Link to="/story">멘토링 스토리</Link></li>
              <li><Link to="/past">지난 멘토링 프로그램</Link></li>
            </ul>
          </li>
          <li className="menu2"><Link to="/studies">사업 내용</Link>
            <ul className="submenu submenu2">
              <li><Link to="/studies">학술연구</Link></li>
              <li><Link to="/plan">멘토링 기획 및 실행</Link></li>
              <li><Link to="/about">회보의 발행</Link></li>
            </ul>
          </li>
          <li><Link to="/archive">멘토링 자료실</Link></li>
          <li className="menu4"><Link to="/community">커뮤니티</Link>
            <ul className="submenu submenu4">
              <li><Link to="/community">공지사항</Link></li>
              <li><Link to="/events">행사안내</Link></li>
              <li><Link to="/news">멘토링 회보</Link></li>
            </ul>
          </li>
          <li className="menu5"><Link to="/greeting">소개</Link>
            <ul className="submenu submenu5">
              <li><Link to="/greeting">인사말</Link></li>
              <li><Link to="/foundation">설립취지</Link></li>
              <li><Link to="/history">연혁</Link></li>
              <li><Link to="/association">정관</Link></li>
              <li><Link to="/funding">후원안내</Link></li>
              <li><Link to="/group">운영조직</Link></li>
              <li><Link to="/business">경영공시</Link></li>
              <li><Link to="/map">오시는길</Link></li>
            </ul>
          </li>
        </ul>
      </div> */}
    </React.Fragment>
  );
};

export default Header;