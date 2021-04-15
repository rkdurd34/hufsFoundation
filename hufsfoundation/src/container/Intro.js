import React from 'react';
import styled from 'styled-components';
import Title from '../components/Title';
import Banner from '../images/library2.gif';

const Container = styled.div`
width:100%;
height:110vw;
position:relative;

`;
const Board = styled.div`
width:100%;
height:75vw;
background-color:#F5F5F5;
display:flex;
flex-direction:column;


.up{

  width:70vw;
  margin:auto;
  margin-bottom:0;
  margin-top:0;
  font-size:1.5vw;
  letter-spacing:0.01vw;
  line-height:3vw;
  text-align:left;


}
.down{
  margin:auto;
  margin-top:0;
  table{
    width:70vw;
    height:60vw;
    pointer-events:none;
    font-size:1.3vw;
  }
  table thead {
    border-top:3px solid #106E79
  }
  table thead tr{
    border:0.5px solid #DCDCDC;
  }
   table thead tr th{
    border:0.5px solid #DCDCDC;
    text-align: center;
    height:5vw;
    background-color: #F1F1F1;
  }
  table tbody tr{
    border:0.5px solid #DCDCDC;
    text-align: center;
  }
  table tbody td{
    border:0.5px solid #DCDCDC;
    text-align: center;
  }
  
  .down_intro{
    width:100%;
    font-size:1.5vw;
    line-height:3vw;  
  letter-spacing:0.01vw;
  margin-bottom:3.5vw;
  text-align:left;

  }
}
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
export default function IntroScreen() {
  return (
    <Container>
      <Title banner={Banner} />
      <BoardTitle>
        <div>장학회소개</div>
      </BoardTitle>
      <Board>

        <div className="up">1989년 11월 29일 설립된 (재)한국외대동문장학회는 <br />한국외국어대학교 재학생 및 동문을 위한 장학금 지급을 목적으로 설립된 공익법인입니다.</div>

        <div className="down">
          <div className="down_intro">5월/11월 장학재단 이사회를 개최하여 장학급 수혜대상 선정 및 예/결산안을 심의 및 의결합니다. </div>
          <table>
            <thead>
              <tr>
                <th></th><th>성명</th><th>직책</th><th>학과,입학년도</th><th style={{ width: "5vw" }}></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td align="center">이사장</td><td>민동석</td><td>총동문회 회장</td><td>노어73</td><td></td>
              </tr>
              <tr>
                <td rowSpan="6" align="center">이사</td><td>윤윤수</td><td>휠라코리아(주)회장</td><td>정외66</td><td></td>
              </tr>
              <tr>
                <td>김기병</td><td>롯데관광(주)회장</td><td>영어58</td><td></td>
              </tr>
              <tr>
                <td>조규태</td><td>(주)김엔씨 대표이사</td><td>베트남68</td><td></td>
              </tr>
              <tr>
                <td>김형진</td><td>세종텔레콤 (주)회장</td><td>AMP1기</td><td></td>
              </tr>
              <tr>
                <td>민경중</td><td>방송통신심의위원회 사무총장</td><td>법학72</td><td></td>
              </tr>
              <tr>
                <td>홍영표</td><td>(주)키티스 산학면정보 대표이사</td><td>아랍81</td><td></td>
              </tr>
              <tr>
                <td rowSpan="2" align="center">감사</td><td>최영호</td><td>학교 육영재단 이사</td><td>노어69</td><td></td>
              </tr>
              <tr>
                <td>유용관</td><td>비즈세무법인 대표세무사</td><td>국제통상86</td><td></td>
              </tr>
            </tbody>
          </table>

        </div>
      </Board>
    </Container >
  );
};;;
