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
width:77%;
height:43vw;
margin: auto;
padding-left:3vw;
background-color:#F5F5F5;
ul{
  list-style: none;
  margin-top:1vw;
  li{
    font-size:1.3vw;
    margin:0.7vw;
    
  font-weight: 400;
  }
}
.up{
  width:100%;
  height:55%;
  display:flex;
  flex-direction: column;
  

  .subtitle{
    font-size: 1.35vw;
    margin-top: 2vw;
    margin-bottom: 2vw;
  }
  
}
.down{
  width:100%;
  height:45%;
  display:flex;
  flex-direction: column;
  
}
.title{
  width:100%;
  font-size: 2vw;
  font-weight: bold;
  color: #106E79;
  
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
    border-bottom:2px solid #CBCBCB;
    padding-bottom:0.5vw;
    font-size: 2.5vw;
    color: #106E79;
    font-weight: bold;

  }
} 
`;
export default function scholarship() {
    return (
        <Container>
            <Title banner={Banner} />
            <BoardTitle>
                <div><span>장학금지급</span></div>
            </BoardTitle>
            <Board>
                <div className="up">
                    <div className="title">장학생 선발기준</div>
                    <div className="content">
                        <div className="subtitle">
                            ※ 재단법인 한국외대동문장학회(財團法人 韓國外大同門奬學會)는 한국외국어대학교 재학생 및 동문을 위한 장학 사업을 목적으로 합니다
                        </div>
                        <div className="content-text">
                            <ul>
                                <li>가. 모교 재학생중 前학기 평균성적 4.0 이상인 학생 </li>
                                <li>나. 동년, 동일학기 교내/외에서 지급한 장학금 또는 학비보조금 수혜자는 제외 </li>
                                <li>다. 생활 보호 대상자, 한시적 생활보호대상자, 실직가정자녀, 수해 피해 가정 등 경제적 어려운 학생 우선지급</li>
                                <li>라. 동일조건일 경우 성적순으로 결정</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="down">
                    <div className="title">지급기준</div>
                    <div className="content">
                        <ul>
                            <li>가. 연 2회 : 한 학기 8명씩, 150만원/명 지급 </li>
                            <li>나. 모집공고 : 4월/10월</li>
                            <li>다. 제출서류:&nbsp;&nbsp;&nbsp;전 학년 성적 증명서 1부<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;주민등록 등본 1부(주민등록번호 전부 공개)  <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;자기소개서 1부
                            </li>
                            <li>라.   지급시기 : 5월, 11월 중 </li>
                        </ul>
                    </div>
                </div>
            </Board>
        </Container>
    );
};;;
