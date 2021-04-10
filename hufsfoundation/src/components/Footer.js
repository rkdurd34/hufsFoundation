import React, { useContext } from 'react';
import styled from 'styled-components';
import logo1 from '../images/logo1.png';

const Container = styled.div`
width:100%;
height:8vw;
background-color:#F1F1F1;
display:flex;
justify-content:space-between;
align-items:center;
border-top: 0.5px solid #DCDCDC;
div{
  width:50%;
  display:flex;
  justify-content:center;
  align-items: center;
}
span{
  font-size: 0.9vw;
  color:#808080;
}

img{
  width:35%;
  margin-left: 10vw;
  }
z-index: 999;

`;


const Footer = () => {


  return (
    <React.Fragment>
      {/* <div className="sub-link">
        <ul>
          <Link to='/greeting'><li>인사말</li></Link>
          <Link to='/foundation'><li>설립취지</li></Link>
          <Link to='/history'><li>연혁</li></Link>
          <Link to='/association'><li>정관</li></Link>
          <Link to='/funding'><li>후원안내</li></Link>
          <Link to='/group'><li>운영조직</li></Link>
          <Link to='/business'><li>경영공시</li></Link>
          <Link to='/map'><li>오시는길</li></Link>
          <Link to='/login'><li>관리자 로그인</li></Link>
          <Link to='/'><li >로그아웃</li></Link>
        </ul>
      </div> */}
      <Container>
        <div >
          <span>
            주소 : 서울특별시 동대문구 이문로 107 외대본관 1101호<br />
            Copyright © 2020 Design All Rights Reserved by 재단법인 한국외대 동문장학회
        </span>
        </div>

        {/* <a href='http://www.hufs.or.kr/'><img src={"alumniLogo"} alt="alumni-logo" className="alumni-logo-btn" /></a> */}
        <div >
          <img src={logo1} alt="logo" />
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Footer;