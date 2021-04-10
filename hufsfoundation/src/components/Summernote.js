import React, { useState } from "react";
import axios from "axios";
import moment from "moment";
import "./Summernote.css";

// imports for summernote
import ReactSummernote from "react-summernote";
import "react-summernote/dist/react-summernote.css";
import "react-summernote/lang/summernote-ko-KR";
import "bootstrap/js/modal";
import "bootstrap/js/dropdown";
import "bootstrap/js/tooltip";
import "bootstrap/dist/css/bootstrap.css";
import { URL } from "../Util.js";

function Summernote({ props }) {
  console.log(props);
  const boardId = 1;
  let boardName = '';
  const [content, setContent] = useState('');
  const [docs, setDocs] = useState([]);


  if (boardId === "2") {
    boardName = "community";
  } else if (boardId === "3") {
    boardName = "events";
  } else if (boardId === "4") {
    boardName = "business";
  }

  // 에디터 내용
  const onChange = (content) => {
    setContent(content);
  };

  const fileChangedHandler = (e) => {
    let temp_list = [];
    for (let i = 0; i < e.target.files.length; i++) {
      temp_list.push(e.target.files[i]);
    }
    setDocs(temp_list);
  };

  const onImageUpload = (images, insertImage) => {
    for (let i = 0; i < images.length; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(images[i]);
      reader.onloadend = () => {
        insertImage(reader.result);
      };
    }
  };

  const createPost = async () => {
    const formData = new FormData();
    formData.append('title', document.querySelector("#post-title").value);
    formData.append('is_notice', Boolean(document.querySelector("#cbox").checked));
    formData.append('board_id', parseInt(boardId));
    formData.append('status', "published");
    formData.append('author_id', 1);
    formData.append('content', content);
    docs.forEach(file => { formData.append('docs', file); });
    const result = await axios.post(URL + '/board/upload', formData);
  };

  return (
    <div className="post-container">
      <input type="text" id="post-title" placeholder=" 제목" />
      <ReactSummernote
        value="내용을 입력하여주세요"
        options={{
          lang: "ko-KR",
          height: 500,
          dialogsInBody: true,
          toolbar: [
            ["style", ["style"]],
            ["font", ["bold", "underline", "clear"]],
            ["fontname", ["fontname"]],
            ["para", ["ul", "ol", "paragraph"]],
            ["table", ["table"]],
            ["insert", ["link", "picture", "video"]],
            ["view", ["fullscreen", "codeview"]],
          ],
        }}
        onChange={onChange}
        onImageUpload={onImageUpload}
      />
      <span className="is-notice">
        공지글 여부: <input type="checkbox" id="cbox" />
      </span>
      <br />

      <div className="fileDiv">
        <span>파일첨부  :</span>
        <input className="file_upload" type="file" multiple onChange={fileChangedHandler} />
      </div>
      <div className="bottom_btn">
        <input
          type="button"
          className="notice_btn done"
          value="완료"
          onClick={createPost}
        />
        <input
          type="button"
          className="notice_btn done"
          value="취소"
          onClick={() => (window.location.href = "/board" + boardName)}
        />
      </div>
    </div>
  );
}

export default Summernote;
