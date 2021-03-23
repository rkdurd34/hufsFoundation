import React, { useContext } from 'react';
// import '../css/footer.css';
import { Link } from 'react-router-dom';


const Footer = () => {
  // const url = URL;
  // const base = url + '/api/user/login'

  // const instance = axios.create({
  //     withCredentials: true
  //   })


  // const logout = () => {
  //     const out = async () => {
  //         await instance.get(base)
  //         .catch( (err) => {
  //             if (err.response.status === 404) { alert('로그인 상태가 아닙니다.') }
  //         })
  //     }
  //     out();
  // }

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
      </div>
      <div className="footer">
        주소 : 서울특별시 동대문구 이문로 107 외대본관 1101호<br />
                Copyright © 2020 Design All Rights Reserved by 사단법인 한국외국어대학교 산학멘토링회
                <a href='http://www.hufs.or.kr/'><img src={"alumniLogo"} alt="alumni-logo" className="alumni-logo-btn" /></a>
        <img src={'sa'} alt="logo" className="logo-btn" />
      </div> */}
    </React.Fragment>
  );
};

export default Footer;