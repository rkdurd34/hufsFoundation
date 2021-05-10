import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import '../css/notice.css';
import '../css/community.css';
import { URL } from "../Util.js";

// 게시판 Detail 페이지
export default function PostDetail({ params }) {
  // console.log(props);
  const url = URL;
  // const docRoot = url + '/api/file';
  const base = url + '/board/post';
  // const authorityBase = url + '/api/user/signup';
  // console.log(props);
  const postId = params.id;
  // const board = props.match.params.board;
  let boardName = '';
  const [post, setPost] = useState([]);
  const [is_super, setAuthority] = useState(false);
  let [file, setFile] = useState([]);
  let downloadLink = '';

  const instance = axios.create({
    withCredentials: true
  });


  // if (board === '2') {
  //   boardName = 'community';
  // }
  // else if (board === '3') {
  //   boardName = 'events';
  // }
  // else if (board === '4') {
  //   boardName = 'business';
  // }
  // else if (board === '5') {
  //   boardName = 'archive';
  // }
  // else if (board === '6') {
  //   boardName = 'news';
  // }

  // useEffect(() => {
  //   const checkUser = async () => {
  //     await instance.get(authorityBase).then(function (res) {
  //       if (res.status === 200) {
  //         setAuthority(true);
  //       }
  //     })
  //       .catch(err => { console.log(err); });
  //   };
  //   checkUser();
  // }, [is_super]);

  useEffect(() => {
    const fetchData = async () => {
      // 현재 게시물의 데이터만 가져오기
      const { data } = await axios.get(base + `?post_no=${postId}`);
      console.log(base);
      setPost(data);
    };
    fetchData();
    return;
  }, [postId]);

  useEffect(() => {
    const fetchFile = async () => {
      const { data } = await axios.get(base + `/file?post_no=${postId}`);

      let tmpArr = [];
      // let tmpArr2 = [];

      const filteredFiles = data.filter(f => f.post_no == postId);
      filteredFiles.map(f => {
        // tmpArr.push(f.name);
        // tmpArr2.push(f.post_file);
        tmpArr.push(f);
      });
      // setFileNames(tmpArr);
      // setFileURL(tmpArr2);
      setFile(tmpArr);
    };
    fetchFile();
  }, []);

  const deletePost = () => {
    const deleteData = async () => {
      await axios.delete(base + postId);
    };
    deleteData();
  };

  const createDownload = async (no, originalName) => {
    await axios({
      url: `http://3.36.240.145:5000/board/post/file/download?post_no=${no}`,
      method: "GET",
      responseType: "blob",
    }).then(res => {
      const url = window.URL.createObjectURL(
        new Blob([res.data], { type: res.headers["content-type"] },)
      );
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", originalName);
      document.body.appendChild(link);
      link.click();
      window.URL.revokeObjectURL(url);
    });
    // .get(`board/post/file/download?post_no=${no}`);


    // console.log(result);
    // const linkArr = link.split(url + '/');
    // return linkArr[1];
  };

  return (
    <React.Fragment>
      <div className="title-container"><span className="notice-title">게시물</span></div>
      <div className="notice-detail">
        <ul>
          <div style={{ display: 'none' }}>
          </div>
          <li>{post.title}</li>
          {/* post.published가 undefined라서 slice할 수 없다는 에러 해결 */}
          {post.published &&
            <li>작성자: 관리자 / 작성일자: {post.published.slice(0, 10)} / 조회: {post.n_hit}</li>
          }
          <li style={{ padding: 0 }}>
            <div style={{ paddingTop: "1vw", paddingBottom: "1vw", marginBottom: '2vw', borderBottom: "0.5px solid #DCDCDC" }}>
              <span style={{ paddingLeft: "2vw" }}>첨부파일 :   </span>{file.map(f => {
                return (<span style={{ textDecoration: "underline", cursor: "pointer" }} onClick={() => createDownload(f.post_no, f.name)}>
                  {/* <Link> */}
                  {f.name}
                  {/* </Link> */}
                </span>);
              })}
            </div>
            {/* 표는 안나옴 */}
            {/* <div dangerouslySetInnerHTML={{ __html: post.content }} /> */}
            {/* <div><Link to ={"/" + downloadLink} target="_blank" download>파일 다운로드</Link></div> */}
          </li>
        </ul>
      </div>
      <Link to={'/' + boardName} className="notice-btn detailBtn" ><span className="btnValue">목록</span></Link>
      {
        is_super ?
          <>
            {/* <Link to={'/update/' + postId + '/' + board} className="notice-btn detailBtn" ><span className="btnValue">수정</span></Link> */}
            <Link to={'/' + boardName} className="notice-btn detailBtn" onClick={deletePost}><span className="btnValue">삭제</span></Link>
          </>
          : ''
      }
    </React.Fragment >
  );
}
