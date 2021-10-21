import React from 'react';
import styled from 'styled-components';
import Title from '../components/Title';
import Banner from '../images/library2.gif';

const Container = styled.div`
width:100%;
height:max-content;
position:relative;

`;
const Board = styled.div`
width:100%;
height:80vw;
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
  width:100%;
  
  span{
    text-align: center;
  border-bottom:2px solid #CBCBCB;
  padding-bottom:0.5vw;
  font-size: 2.5vw;
  color: #106E79;
  font-weight: bold;

  }
} 
`;
export default function IntroScreen() {
    return (
        <Container>
            <Title banner={Banner} />
            <BoardTitle>
                <div>
                    <span>
                        장학회 소개
                    </span>
                </div>
            </BoardTitle>
            <Board>

                <div className="up">1989년 11월 29일 설립된 (재)한국외대동문장학회는 <br />한국외국어대학교 재학생 및 동문을 위한 장학금 지급을 목적으로 설립된 공익법인입니다.</div>

                <div className="down">
                    <div className="down_intro">매년 2월과 8월에 재단이사회를 개최하여 장학생 선발, 예산, 결산, 자산 관리, 정관 개정, 임원의 임명에 관한 사항을 심의하여 결정합니다. <br />
                        *지정기부금 단체로써 기탁하신 기부금에대한 영수증 발급이 가능합니다.<br />
                        *기부를 원하시는 분(동문 단체)는 사무국으로 연락 주시기 바랍니다. 기부하시는 분의 요청에 맞추어 장학금을 지급할 수 있습니다.(02-577-1954)
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th></th><th>성명</th><th>직책</th><th>학과,입학년도</th><th style={{ width: "5vw" }}></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td align="center">이사장</td><td>양인집</td><td>총동문회 회장</td><td>일본어76</td><td></td>
                            </tr>
                            <tr>
                                <td rowSpan="6" align="center">이사</td><td>김석필</td><td>(주)비바체 대표이사</td><td>불어80</td><td></td>
                            </tr>
                            <tr>
                                <td>김형진</td><td>(주)세종텔레콤 회장</td><td>경영대학원97</td><td></td>
                            </tr>
                            <tr>
                                <td>이호성</td><td>SM Golf ENC 대표</td><td>일본어76</td><td></td>
                            </tr>
                            <tr>
                                <td>홍영표</td><td>(주)KITIS산학연정보 대표이사</td><td>아랍어81</td><td></td>
                            </tr>
                            <tr>
                                <td> </td><td> </td><td> </td><td></td>
                            </tr>
                            <tr>
                                <td rowSpan="2" align="center">감사</td><td>최맹호</td><td>동원육영재단 이사</td><td>노어69</td><td></td>
                            </tr>
                            <tr>
                                <td>유용관</td><td>비즈세무법인 대표</td><td>국제통상86</td><td></td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </Board>
        </Container >
    );
};;;
