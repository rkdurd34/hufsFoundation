import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'antd';
import banner1 from '../images/library1.gif';
import banner2 from '../images/library2.gif';
import banner3 from '../images/library3.gif';
const Container = styled.div`
width:100%;
height:25vw;
box-shadow:0px 0px 37px 4px rgba(38,38,38,0.43);
z-index:10000;
img{
  opacity:100%;
  z-index:10000;
  object-fit: cover;
  height:25vw;
}
`;

const Title = ({ banner }) => {
  return (
    <Container>
      <Carousel autoplay>
        <div>
          <img src={banner1} alt="타이틀" width="100%" />
        </div>
        <div>
          <img src={banner2} alt="타이틀" width="100%" />
        </div>
        <div>
          <img src={banner3} alt="타이틀" width="100%" />
        </div>
      </Carousel>

    </Container>
  );
};

export default Title;